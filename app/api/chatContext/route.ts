import { NextResponse } from "next/server"
import { createPrompt } from "@/actions/vectorSend"
import { chunkAndEmbedAndUpsertJSON } from "@/utils/jsonProcessor"
import { getServerSession } from "next-auth/next"

import { env } from "@/env.mjs"
import { authOptions } from "@/lib/auth"
import { RequiresProPlanError } from "@/lib/exceptions"
import { getUserSubscriptionPlan } from "@/lib/subscription"

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)

    // if (!session) {
    //   return new Response("Unauthorized", { status: 403 })
    // }

    // const { user } = session
    // const subscriptionPlan = await getUserSubscriptionPlan(user.id)

    // if (!subscriptionPlan?.isPro) {
    //   throw new RequiresProPlanError()
    // }

    const { nameSpace, data } = await req.json()

    // console.log("nameSpace", nameSpace)
    // console.log("data", data)

    if (!data) {
      return new Response("Missing data", { status: 400 })
    }

    if (!nameSpace) {
      return new Response("Missing nameSpace", { status: 400 })
    }

    let response = await chunkAndEmbedAndUpsertJSON(nameSpace, data)
    const testMessage = [
      {
        role: "system",
        content:
          "Users will ask below is data for local reel car-share statistics for the surrounding area. provide responses to user messages as if you were a reel host with many years of experience managing large fleets of cars. You have in depth knowlege of accounting for small rental businesses. You are knowlegeable in the laws surrounding car-sharing for reel as well.",
      },
    ]

    let dataInit = data.map((item) => item.vehicleID.toString())
    await createPrompt(testMessage, nameSpace, dataInit.slice(0, 4))
    return NextResponse.json(response, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
