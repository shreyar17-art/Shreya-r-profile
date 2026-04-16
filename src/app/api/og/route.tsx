import { ImageResponse } from "@vercel/og";
import { personalInfo } from "@/data/resume-data";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#030014",
          backgroundImage: "radial-gradient(circle at top left, #0f0f23 0%, #030014 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid rgba(0, 212, 255, 0.3)",
            backgroundColor: "rgba(15, 15, 35, 0.7)",
            padding: "80px",
            borderRadius: "40px",
            boxShadow: "0 0 50px rgba(0, 212, 255, 0.2)",
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 900,
              background: "linear-gradient(to right, #ffffff, #00d4ff)",
              backgroundClip: "text",
              color: "transparent",
              marginBottom: "20px",
            }}
          >
            {personalInfo.name}
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 600,
              color: "rgba(255, 255, 255, 0.8)",
              marginBottom: "40px",
            }}
          >
            {personalInfo.title}
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
            }}
          >
             {["Code Evaluation", "Cloud", "Software Eng"].map((tag) => (
                <div
                  key={tag}
                  style={{
                    backgroundColor: "rgba(124, 58, 237, 0.1)",
                    border: "1px solid rgba(124, 58, 237, 0.3)",
                    color: "#7c3aed",
                    padding: "10px 20px",
                    borderRadius: "15px",
                    fontSize: 20,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  {tag}
                </div>
             ))}
          </div>
        </div>
        
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "60px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            color: "rgba(255, 255, 255, 0.2)",
            fontSize: 16,
            fontWeight: 600,
            letterSpacing: "2px",
          }}
        >
           BUILT BY INTELLIFORGE AI
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
