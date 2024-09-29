import "server-only"
import fs from "fs"
import path from "path"
import { Worker } from "worker_threads"
import { embedChunksFB } from "@/actions/vectorSend"
import {
  Pinecone,
  PineconeRecord,
  RecordMetadata,
} from "@pinecone-database/pinecone"
import { Request, Response } from "express"
import multer from "multer"
// import pdfParse from "pdf-parse"
import { v4 as uuidv4 } from "uuid"

import { env } from "@/env.mjs"

import { JsonModel, TableData } from "../models/jsonModel"
import { upload } from "../utils/multer"
// import { ServerStorage } from "../utils/storage/serverStorage"
// import { SpacesStorage } from "../utils/storage/spacesStorage"
// import { storageService } from "../utils/storage/storage"
import { embedChunks } from "./embeddings"

const pc = new Pinecone({
  apiKey: process.env.PINECONE_KEY!,
})

const index = pc.index(process.env.PINECONE_INDEX!)

/**
 * Chunks the content into smaller pieces and embeds them using the embedChunks function.
 * @param userId - The ID of the document.
 * @param documentUrl - The URL of the document.
 * @param content - The content to be chunked and embedded.
 * @returns A promise that resolves to an object containing the processed document.
 * @throws If there is an error in chunking and embedding the document.
 */
async function chunkAndEmbedAndUpsertJSON(
  userId: string,
  content: any[]
): Promise<{ response: any }> {
  try {
    const tableData: TableData = {
      nameSpaceId: userId,
      chunks: [],
    }

    // Pick a chunking strategy (this will depend on the use case and the desired chunk size!)
    const { chunks, vehicleIDs } = chunkData(content)

    const performEmbedd = await embedChunksFB(
      chunks,
      tableData.nameSpaceId,
      vehicleIDs
    )

    console.log("performEmbed", performEmbedd)

    return { response: performEmbedd }
  } catch (error) {
    console.error("Error in chunking and embedding document:", error)
    throw error
  }
}

/**
 * Splits a given text into chunks of 1 to many paragraphs.
 *
 * @param text - The input text to be chunked.
 * @param maxChunkSize - The maximum size (in characters) allowed for each chunk. Default is 1000.
 * @param minChunkSize - The minimum size (in characters) required for each chunk. Default is 100.
 * @returns An array of chunked text, where each chunk contains 1 or multiple "paragraphs"
 */
function chunkData(data: any[]): {
  chunks: string[]
  // locationData: string[]
  vehicleIDs: string[]
} {
  let chunks: string[] = []
  // let locationData: string[] = []
  let vehicleIDs: string[] = []

  // locationData = data.map((obj) => obj.vehicleLocation)
  vehicleIDs = data.map((obj) => obj.vehicleID.toString())
  chunks = data.map((obj) => JSON.stringify(obj))

  // console.log("locationData", locationData)
  // console.log("vehicleIDs", vehicleIDs)

  return { chunks, vehicleIDs }
}

export { chunkAndEmbedAndUpsertJSON }
