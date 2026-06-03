import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const colorsStr = searchParams.get("colors");
    const name = searchParams.get("name") || "Color Palette";

    if (!colorsStr) {
        return new Response("Missing colors parameter", { status: 400 });
    }

    const colors = colorsStr.split(",").map(c => c.startsWith("#") ? c : `#${c}`);

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "stretch",
            justifyContent: "center",
            backgroundColor: "#000",
          }}
        >
          {colors.map((color, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-end",
                backgroundColor: color,
                paddingBottom: 40,
              }}
            >
              <div
                style={{
                  fontSize: 32,
                  fontWeight: "bold",
                  color: "#fff",
                  textShadow: "0px 2px 10px rgba(0,0,0,0.5)",
                  backgroundColor: "rgba(0,0,0,0.3)",
                  padding: "10px 20px",
                  borderRadius: 15,
                  textTransform: "uppercase",
                  fontFamily: "monospace",
                }}
              >
                {color.toUpperCase()}
              </div>
            </div>
          ))}
          <div
            style={{
                position: 'absolute',
                top: 40,
                left: 40,
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'rgba(0,0,0,0.85)',
                padding: '20px 30px',
                borderRadius: 30,
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 5 }}>
                <span style={{ color: 'white', fontSize: 28, fontWeight: 'bold' }}>ColorForge</span>
                <span style={{ color: '#aaa', fontSize: 20, marginLeft: 10, textTransform: 'uppercase', letterSpacing: 2 }}>Studio</span>
            </div>
            <span style={{ color: '#eee', fontSize: 42, fontWeight: 'bold' }}>{name}</span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
