import { ImageResponse } from "next/og";
import colorNames from "@/data/color-names.json";

export const dynamic = "force-static";

export const alt = "Color Preview";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export async function generateStaticParams() {
  return colorNames.map((color: any) => ({
    colorname: color.name.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export default async function Image({ params }: { params: Promise<{ colorname: string }> }) {
  const { colorname } = await params;
  const colorData: any = colorNames.find(
    (c: any) => c.name.toLowerCase().replace(/\s+/g, "-") === colorname
  );

  if (!colorData) {
    return new Response("Not Found", { status: 404 });
  }

  const color = colorData.hex;

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
          backgroundColor: color,
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: 84,
              fontWeight: "bold",
              color: "#fff",
              textShadow: "0px 4px 20px rgba(0,0,0,0.5)",
              backgroundColor: "rgba(0,0,0,0.3)",
              padding: "20px 40px",
              borderRadius: 30,
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            {color.toUpperCase()}
          </div>
          <div
            style={{
              fontSize: 42,
              fontWeight: "bold",
              color: "#fff",
              textShadow: "0px 2px 10px rgba(0,0,0,0.5)",
              opacity: 0.9,
            }}
          >
            {colorData.name}
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 40,
            display: "flex",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.8)",
            padding: "10px 20px",
            borderRadius: 50,
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <span style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>ColorForge</span>
          <span style={{ color: "#888", fontSize: 24, marginLeft: 10 }}>Color</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
