// documentController.ts

/**
 * Controller class for managing documents.
 */
import fs from "fs"
import path from "path"
import { Worker } from "worker_threads"
import multer from "multer"
import { v4 as uuidv4 } from "uuid"

import { Document, DocumentModel } from "../models/documentModel"
import { upload } from "../utils/multer"

// import { ServerStorage } from "../utils/storage/serverStorage"
// import { SpacesStorage } from "../utils/storage/spacesStorage"
// import { storageService } from "../utils/storage/storage"

class JsonController {
  private documentModel: DocumentModel

  /**
   * Constructs a new instance of DocumentsController.
   */
  constructor() {
    this.documentModel = new DocumentModel()
  }

  /**
   * Safe upsert with retry logic to handle rate limits.
   * @param document - The document data to be upserted.
   * @param namespaceId - The namespace ID of the document.
   */
  async safeUpsertDocument(document: Document, namespaceId: string) {
    let retries = 0
    const maxRetries = 5
    while (retries < maxRetries) {
      try {
        await this.documentModel.upsertDocument(document, namespaceId)
        break
      } catch (error: any) {
        if (
          error.message.includes("rate limit exceeded") &&
          retries < maxRetries
        ) {
          // Exponential backoff
          const waitTime = Math.pow(2, retries) * 1000
          console.log(`Waiting ${waitTime / 1000} seconds before retrying...`)
          await new Promise((resolve) => setTimeout(resolve, waitTime))
          retries++
        } else {
          throw error
        }
      }
    }
  }
}

export default new JsonController()
