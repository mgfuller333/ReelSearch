"use server"

import { NextResponse } from "next/server"
import { createPrompt } from "@/actions/vectorSend"
import { openai } from "@ai-sdk/openai"
import { LanguageModelV1, generateText } from "ai"

// export  const runtime = "edge"

/**
 * Handles the POST request for the chat route.
 * @param req - The request object.
 * @returns A StreamingTextResponse object containing the result of the chat interaction.
 * @throws An error if the expected prompt structure is not present in the server response.
 */
export async function POST(req: Request, res: NextResponse) {
  const { messages, namespaceId, vehicleArray } = await req.json()

  let context
  try {
    if (!namespaceId || !messages) {
      return new Response("Missing required fields", { status: 400 })
    }

    // console.log("namespaceId", namespaceId)
    // console.log("vehicleArray", vehicleArray)
    context = await createPrompt(messages, namespaceId, vehicleArray)
  } catch (error) {
    console.error("Error fetching context:", error)
    return new Response(
      JSON.stringify({ message: "Failed to fetch context" }),
      { status: 500 }
    )
  }

  if (context && context.prompt && context.prompt.length > 0) {
    const systemContent = context.prompt[0].content

    let result = await generateText({
      system: systemContent,
      temperature: 0.2,
      model: openai("gpt-4o") as LanguageModelV1,
      maxRetries: 2,
      messages,
    })

    // console.log("response", result.text)
    let MessageBack =
      result.text ||
      "reelSearch AI is experiencing trouble. Please try again later"

    return NextResponse.json(MessageBack, { status: 200 })
  } else {
    throw new Error(
      "Unexpected server response structure: 'prompt' array is missing or empty."
    )
  }
}
