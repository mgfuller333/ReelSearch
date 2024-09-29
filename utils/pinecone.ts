// pinecone.ts

import {
  Pinecone,
  type ScoredPineconeRecord,
} from "@pinecone-database/pinecone"

export type Metadata = {
  referenceURL: string
  text: string
}

// Used to retrieve matches for the given embeddings
const getMatchesFromEmbeddings = async (
  embeddings: number[],
  topK: number,
  namespace: string
): Promise<ScoredPineconeRecord<Metadata>[]> => {
  // Obtain a client for Pinecone
  const pinecone = new Pinecone({
    apiKey: process.env.PINECONE_KEY!,
  })

  let indexName: string = process.env.PINECONE_INDEX!

  // Get the Pinecone index and namespace
  const pineconeNamespace = pinecone
    .Index<Metadata>(indexName)
    .namespace(namespace ?? "")

  try {
    // Query the index with the defined request
    const queryResult = await pineconeNamespace.query({
      vector: embeddings,
      topK,
      includeMetadata: true,
    })
    return queryResult.matches || []
  } catch (e) {
    // Log the error and throw it
    console.log("Error querying embeddings: ", e)
    throw new Error(`Error querying embeddings: ${e}`)
  }
}

export { getMatchesFromEmbeddings }
