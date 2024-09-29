"use server"

import * as admin from "firebase-admin"
import { getServerSession } from "next-auth"

import { authOptions } from "@/lib/auth"
import initializeAdmin from "@/lib/firebase_server"

export async function saveMonthlyEarnings(data: any) {
  try {
    // const session = await getServerSession(authOptions)
    // if (!session?.user || !session?.user.email) {
    //   throw new Error("Unauthorized")
    // }

    const id = data?.id
    console.log("id", id)

    const db = await initializeAdmin()
    const docRef = db.firestore().collection("earnings").doc(String(data?.id))

    const res = await docRef.set(data, { merge: true })

    return res
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

export async function saveAvailabilityData(data: any) {
  try {
    // const session = await getServerSession(authOptions)
    // if (!session?.user || !session?.user.email) {
    //   throw new Error("Unauthorized")
    // }

    const db = await initializeAdmin()

    for (const key in data) {
      const obj = data[key]
      console.log("send obj", obj)

      const docRef = db.firestore().collection("availability").doc(String(key))

      const res = await docRef.set(obj, { merge: true })
    }

    return data
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

export async function getAvailabilityData(id: string) {
  try {
    const db = await initializeAdmin()
    const docRef = db.firestore().collection("availability").doc(id)

    const doc = await docRef.get()

    const data = await doc.data()

    if (!data) {
      throw new Error("No data found")
    }

    return data
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

export async function getMonthlyEarnings(id: string) {
  try {
    const db = await initializeAdmin()
    const docRef = db.firestore().collection("earnings").doc(id)

    const doc = await docRef.get()

    const data = await doc.data()

    if (!data) {
      throw new Error("No data found")
    }

    return data
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

export async function createFleet(props: any) {
  try {
    const db = await initializeAdmin()
    const docRef = db.firestore().collection("fleets").doc()

    const res = await docRef.set(props)

    // add fleets to user
    const userDocRef = db.firestore().collection("users").doc(props.owner)
    const userData = (await userDocRef.get()).data()

    if (!userData) {
      await db
        .firestore()
        .collection("users")
        .doc(props.owner)
        .set({
          fleets: [docRef.id],
        })
    } else {
      await userDocRef.update({
        fleets: admin.firestore.FieldValue.arrayUnion(docRef.id),
      })
    }

    return {
      success: true,
      message: "Fleet created successfully",
    }
  } catch (error: any) {
    console.log(error)
    return {
      success: false,
      message: error.message,
    }
  }
}

export async function getFleet(id: string) {
  try {
    const db = await initializeAdmin()
    const docRef = db.firestore().collection("fleets").doc(id)

    const doc = await docRef.get()

    const data = await doc.data()

    if (!data) {
      throw new Error("No data found")
    }

    return data
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

export const updateFleet = async (data: any) => {
  try {
    const db = await initializeAdmin()
    const docRef = db.firestore().collection("fleets").doc(data.id)

    const res = await docRef.set(data, { merge: true })

    return res
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

export const deleteFleet = async (id: string) => {
  try {
    const db = await initializeAdmin()
    const docRef = db.firestore().collection("fleets").doc(id)

    const res = await docRef.delete()

    return res
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

export const joinFleet = async (data: any) => {
  try {
    console.log("joinFleet", data)
    const db = await initializeAdmin()
    const docRef = db.firestore().collection("fleets").doc(data.fleetId)

    // add user to members array
    const r1 = await docRef.update({
      members: admin.firestore.FieldValue.arrayUnion(data.userId),
    })

    const userDocRef = db.firestore().collection("users").doc(data.userId)
    const userData = (await userDocRef.get()).data()

    console.log("userData", userData)
    if (!userData) {
      console.log("user not found")
      await db
        .firestore()
        .collection("users")
        .doc(data.userId)
        .set({
          fleets: [data.fleetId],
        })
    } else {
      console.log("user found")
      const r2 = await userDocRef.update({
        fleets: admin.firestore.FieldValue.arrayUnion(data.fleetId),
      })
    }

    return {
      success: true,
      message: "Fleet joined successfully",
    }
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

export const leaveFleet = async (data: any) => {
  try {
    console.log("leaveFleet", data)
    const db = await initializeAdmin()
    const docRef = db.firestore().collection("fleets").doc(data.fleetId)

    // remove user from members array
    const r1 = await docRef.update({
      members: admin.firestore.FieldValue.arrayRemove(data.userId),
    })

    const userDocRef = db.firestore().collection("users").doc(data.userId)

    const r2 = await userDocRef.update({
      fleets: admin.firestore.FieldValue.arrayRemove(data.fleetId),
    })

    return {
      success: true,
      message: "Fleet left successfully",
    }
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

export const invitationToFleet = async (data: any) => {
  try {
    console.log("invitationToFleet", data)
    const db = await initializeAdmin()
    const docRef = db.firestore().collection("fleets").doc(data.fleetId)

    const userDocRef = db.firestore().collection("users").doc(data.userId)
    const userData = (await userDocRef.get()).data()

    console.log("userData", userData)
    if (!userData) {
      console.log("user not found")
      await db
        .firestore()
        .collection("users")
        .doc(data.userId)
        .set({
          invitationSent: [data.fleetId],
        })
    } else {
      await userDocRef.update({
        invitationSent: admin.firestore.FieldValue.arrayUnion(data.fleetId),
        fleets: admin.firestore.FieldValue.arrayUnion(data.fleetId),
      })
    }

    // get fleet data
    const fleetDoc = await docRef.get()
    const fleetData = await fleetDoc.data()

    // add invitation to fleet's invitations sub-collection
    const invitationDocRef = docRef.collection("invitations").doc()

    const invitationData = {
      fleetId: data.fleetId,
      fleetName: fleetData?.name,
      userId: data.userId,
      status: "pending",
    }

    await invitationDocRef.set(invitationData)

    return {
      success: true,
      message: "Fleet invitation sent successfully",
    }
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

const getContextData = async (
  message: any,
  namespaceId: string,
  vehicleArray: any
) => {
  try {
    // Fetch documents one by one
    const db = await initializeAdmin()
    const embeddedReportRef = db
      .firestore()
      .collection("_firestore-vector-search/index/queries")

    const docRef = embeddedReportRef
    const RefDoc = await docRef.add({
      query: message,
      prefilters: [
        {
          field: "userID",
          operator: "==",
          value: namespaceId,
        },
      ],
    })

    if (!RefDoc.id) {
      console.error("could not find DocIds")
      return
    }

    if (RefDoc.id) {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      const refDocID = embeddedReportRef.doc(RefDoc.id)
      const refdocs = await refDocID.get()
      const refdocsData = refdocs.data()

      if (!refdocsData || refdocsData.result.ids == undefined) {
        console.error("refdocs do not exist")
        const context = "none"
        return context
      }

      if (refdocsData.result.ids) {
        const contextIDs = refdocsData.result.ids
        // console.log("Document data:", contextIDs)
        const contextData = await fetchReferenceData(contextIDs)
        // console.log("contextData", contextData)
        return contextData
      }
    }
  } catch (error) {
    console.error("Error fetching documents:", error)
    const context = "none"
    return context
  }
}

export const embedChunksFB = async (
  dataArray: any[],
  namespaceId: string,
  vehicleIDs: string[]
) => {
  try {
    // Reference to the Firestore collection
    const db = await initializeAdmin()
    const embeddedReportRef = db.firestore().collection("chatCollection")

    await deleteUserData(namespaceId)
    // Function to embed a document and return its ID
    const embeddDocument = async (
      docData: any,
      vehicleID: string
    ): Promise<string | null> => {
      try {
        // console.log("vehicleID", namespaceId)
        const docRef = embeddedReportRef.doc(vehicleID)
        await docRef.set({
          input: docData,
          userID: namespaceId,
        })
        return docRef.id
      } catch (error) {
        console.error("Error adding document: ", error)
        return null
      }
    }

    // Fetch all documents in parallel
    const fetchDocs = dataArray.map((doc, index) =>
      embeddDocument(doc, vehicleIDs[index])
    )
    const finishedDocs = await Promise.all(fetchDocs)

    // Filter out null results (in case any document additions failed)
    return finishedDocs.filter((docId) => docId !== null)
  } catch (error) {
    console.error("Error fetching documents:", error)
    throw error
  }
}

const fetchReferenceData = async (docIdArray: string[]) => {
  try {
    // Reference to the Firestore collection
    const db = await initializeAdmin()
    const embeddedReportRef = db.firestore().collection("chatCollection")

    // Function to fetch a document and return its input data
    const fetchDocument = async (docID: string): Promise<string | null> => {
      try {
        // console.log("vehicleID", docID)
        const docRef = embeddedReportRef.doc(docID)
        const doc = await docRef.get()
        const docData = doc.data()

        if (docData) {
          console.log("Document data:", docData.input)
          return docData.input
        } else {
          console.log("No such document!")
          return null
        }
      } catch (error) {
        console.error("Error getting document:", error)
        return null
      }
    }

    // Fetch all documents in parallel
    const fetchDocs = docIdArray.map((docID) => fetchDocument(docID))
    const finishedDocs = await Promise.all(fetchDocs)

    // Filter out null results (in case any document retrievals failed)
    return finishedDocs.filter((docData) => docData !== null)
  } catch (error) {
    console.error("Error fetching documents:", error)
    throw error
  }
}

export async function createPrompt(
  messages: any[],
  namespaceId: string,
  vehicleArray: any[]
) {
  "use server"
  try {
    // Get the last message
    const lastMessage = messages[messages.length - 1]["content"]

    // Get the context from the last message
    const context = await getContextData(lastMessage, namespaceId, vehicleArray)
    const prompt = [
      {
        role: "system",
        content: `
        AI assistant is a brand new, powerful, human-like artificial intelligence. This Assistant is a skilled Turo Host and a skilled Data scientist.
        AI assistant will not apologize for previous responses, but instead will indicated new information was gained.
        keep responses between 10 and 50 words.

        Users will be asking question about car data provided on a data table. 
        If user asks about or refers to the current data or a data table or makes similar references, AI will refer to the the content after START CONTEXT BLOCK and before END OF CONTEXT BLOCK as the CONTEXT BLOCK. 
        AI assistant will take into account any CONTEXT BLOCK that is provided in a conversation.
        AI assistant will not invent anything that is not drawn directly from the context.
        AI assistant will double check makes,models, & years. AI assistant will not provide a response for cars that don't exist.
        AI assistant will not respond to any messages using markdown content, only basic text.

        START CONTEXT BLOCK
        ${context}
        END OF CONTEXT BLOCK

         
      `,
      },
    ]
    return { prompt }
  } catch (e) {
    throw e
  }
}

const deleteUserData = async (userID) => {
  const db = await initializeAdmin()
  const vectorDBCol = db.firestore().collection("chatCollection")
  let refIDArray: string[] = []

  try {
    const querySnapshot = await vectorDBCol.where("userID", "==", userID).get()
    querySnapshot.forEach((doc) => {
      refIDArray.push(doc.id)
    })
  } catch (error) {
    console.log("Error getting documents: ", error)
    return
  }

  try {
    const deletePromises = refIDArray.map((docId) =>
      vectorDBCol.doc(docId).delete()
    )
    await Promise.all(deletePromises)
    // console.log(`Deleted ${refIDArray.length} documents for userID: ${userID}`)
  } catch (error) {
    console.log("Error deleting documents: ", error)
  }
}
