import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

import { ankitProfile } from "@/data/knowledge";
import { projects } from "@/data/projectsData";
import { SYSTEM_PROMPT } from "@/data/systemPrompt";

const apiKey = process.env.GEMINI_API_KEY;
const modelName = process.env.MODEL_NAME || "Gemini 2.5 Flash";

if (!apiKey) {
  console.error("❌ GEMINI_API_KEY is missing");
}

const ai = apiKey
  ? new GoogleGenAI({
      apiKey,
    })
  : null;

const projectsForAI = projects.map((project) => ({
  title: project.title,
  introduction: project.introduction,
  keyInsights: project.keyInsights,
  technologies: project.technologies,
  github: project.github,
  liveLink: project.liveLink,
  portfolioLink: `https://newportfolio-rho-two.vercel.app/projects/${project.slug}`,
}));


const PORTFOLIO_CONTEXT = `
==================================================
ANKIT RATHORE - COMPLETE PORTFOLIO KNOWLEDGE
==================================================

------------------------------
ANKIT PROFILE
------------------------------

${JSON.stringify(ankitProfile, null, 2)}


------------------------------
ANKIT PROJECTS
------------------------------

${JSON.stringify(projectsForAI, null, 2)}


==================================================
END OF PORTFOLIO KNOWLEDGE
==================================================
`;

/* =========================================================
   POST
========================================================= */

export async function POST(request: NextRequest) {
  try {
    console.log("=================================");
    console.log("🤖 JIYA API REQUEST");
    console.log("=================================");

    /* -----------------------------------------
       Check API key
    ----------------------------------------- */

    if (!apiKey || !ai) {
      console.error("❌ GEMINI_API_KEY is missing");

      return NextResponse.json(
        {
          error:
            "JEMINI_API_KEY is missing. Check your .env.local file.",
        },
        {
          status: 500,
        },
      );
    }

    /* -----------------------------------------
       Read request
    ----------------------------------------- */

    const body = await request.json();

    console.log("📩 Request received");

    const message =
      typeof body?.message === "string"
        ? body.message.trim()
        : "";

    console.log("💬 User message:", message);

    /* -----------------------------------------
       Validate message
    ----------------------------------------- */

    if (!message) {
      return NextResponse.json(
        {
          error: "Message is required.",
        },
        {
          status: 400,
        },
      );
    }

    if (message.length > 1000) {
      return NextResponse.json(
        {
          error: "Message is too long.",
        },
        {
          status: 400,
        },
      );
    }

    /* -----------------------------------------
       Build Gemini request

       SYSTEM PROMPT:
       Controls Jiya's behavior.

       PORTFOLIO CONTEXT:
       Complete knowledge.ts + projectsData.ts.

       USER QUESTION:
       Current visitor question.
    ----------------------------------------- */

    console.log(
      "📚 Portfolio context length:",
      PORTFOLIO_CONTEXT.length,
    );

    console.log(
      "🚀 Sending request to Gemini 2.5 Flash...",
    );

    const response = await ai.models.generateContent({
      model: modelName,

      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.3,
      },

      contents: `
==================================================
COMPLETE PORTFOLIO KNOWLEDGE
==================================================

${PORTFOLIO_CONTEXT}

==================================================
VISITOR QUESTION
==================================================

${message}

`,
    });

    console.log("✅ Gemini response received");

    /* -----------------------------------------
       Extract response
    ----------------------------------------- */

    const reply = response.text?.trim();

    console.log("🤖 Jiya:", reply);

    if (!reply) {
      throw new Error(
        "Gemini returned an empty response.",
      );
    }

    /* -----------------------------------------
       Return response
    ----------------------------------------- */

    return NextResponse.json(
      {
        reply,
      },
      {
        status: 200,
      },
    );
  } catch (error: unknown) {
    console.error("=================================");
    console.error("❌ JIYA API ERROR");
    console.error("=================================");

    console.error(error);

    const errorMessage =
      error instanceof Error
        ? error.message
        : "Jiya is temporarily unavailable.";

    return NextResponse.json(
      {
        error: errorMessage,
      },
      {
        status: 500,
      },
    );
  }
}