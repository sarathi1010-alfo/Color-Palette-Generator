import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get("title") || "Color Palette Generator";
    const type = searchParams.get("type") || "website";
    const colorsStr = searchParams.get("colors");

    const SITE_NAME = "PaletteFlow";

    let colors: string[] = [];
    if (colorsStr) {
      colors = colorsStr.split(",").map(c => c.startsWith("#") ? c : `#${c}`);
    } else {
      // Default palette for non-color/palette pages
      colors = ["#1a1a2e", "#16213e", "#0f3460", "#e94560"];
    }

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
              {colorsStr && (
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
              )}
            </div>
          ))}
          <div
            style={{
                position: 'absolute',
                top: 40,
                left: 40,
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'rgba(0,0,0,0.8)',
                padding: '10px 20px',
                borderRadius: 50,
                border: '1px solid rgba(255,255,255,0.2)'
            }}
          >
            <span style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>{SITE_NAME}</span>
            <span style={{ color: '#888', fontSize: 24, marginLeft: 10, textTransform: 'capitalize' }}>{type}</span>
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: 40,
              left: 40,
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgba(0,0,0,0.8)',
              padding: '30px',
              borderRadius: 20,
              border: '1px solid rgba(255,255,255,0.1)',
              maxWidth: '80%'
            }}
          >
            <h1 style={{ color: 'white', fontSize: 60, margin: 0, fontWeight: 'bold', lineHeight: 1.1, wordWrap: 'break-word' }}>
              {title.length > 60 ? title.substring(0, 60) + '...' : title}
            </h1>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        headers: {
          'Cache-Control': 'public, immutable, no-transform, max-age=31536000',
        },
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
