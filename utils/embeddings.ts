//embeddings.ts

import OpenAI from "openai"

import { env } from "@/env.mjs"

/**
 * Embed a piece of text using an embedding model or service.
 * This is a placeholder and needs to be implemented based on your embedding solution.
 *
 * @param text The text to embed.
 * @returns The embedded representation of the text.
 */
export async function embedChunks(chunks: string[]): Promise<any> {
  // You can use any embedding model or service here.
  // In this example, we use OpenAI's text-embedding-3-small model.
  const openai = new OpenAI({
    apiKey: env.OPENAI_API_KEY,
    organization: env.OPENAI_ORG_ID,
  })
  try {
    console.log("embedding...")
    const response = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: chunks,
      encoding_format: "float",
      dimensions: 1024,
    })

    // console.log("embedding complete: response", response.data)
    return response.data
  } catch (error) {
    console.error("Error embedding text with OpenAI:", error)
    throw error
  }
}
