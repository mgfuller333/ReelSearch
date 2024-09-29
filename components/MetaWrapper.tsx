"use client"

import { useEffect } from "react"
import { track } from "@vercel/analytics"

const MetaWrapper = ({ children }: { children: React.ReactNode }) => {
  const viewContentEvent = (event: any) => {
    track("AddToChrome")
    console.log("event", event)
    const button = event.target as HTMLButtonElement
    window.fbq("track", "ViewContent", {
      content_ids: ["reelSearch"],
      contents: [{ id: "reelSearch", quantity: 1 }],
      value: 15.0,
      currency: "USD",
      from: (button as HTMLElement).dataset.from,
    })
  }

  const CompleteRegistrationEvent = (event: any) => {
    track("CompleteRegistration")
    console.log("CompleteRegistrationEvent", event)
    const button = event.target as HTMLButtonElement
    window.fbq("track", "CompleteRegistration", {
      content_ids: ["reelSearch"],
      contents: [{ id: "reelSearch", quantity: 1 }],
      content_type: "product",
      value: 15.0,
      currency: "USD",
      from: (button as HTMLElement).dataset.from,
    })
  }

  const initiateCheckoutEvent = (event: any) => {
    track("AddToChrome")
    console.log("event", event)
    const button = event.target as HTMLButtonElement
    window.fbq("track", "InitiateCheckout", {
      content_ids: ["reelSearch"],
      contents: [{ id: "reelSearch", quantity: 1 }],
      content_type: "product",
      value: 15.0,
      currency: "USD",
      from: (button as HTMLElement).dataset.from,
    })
  }

  // const purchaseEvent = (event: any) => {
  //   track("AddToChrome")
  //   console.log("event", event)
  //   const button = event.target as HTMLButtonElement
  //   window.fbq("track", "ViewContent", {
  //     name: "reelSearch",
  //     price: 15.0,
  //     currency: "USD",
  //     from: (button as HTMLElement).dataset.from
  //   })

  useEffect(() => {
    // select all add-to-chrome-button elements
    const viewContentEventButtons = document.querySelectorAll(
      ".add-to-chrome-button"
    )

    const CompleteRegistrationButtons = document.querySelectorAll(
      ".CompleteRegistration-button"
    )

    const initiateCheckoutEventButtons = document.querySelectorAll(
      ".initiateCheckoutEventbutton"
    )

    // const addToChromeButtons = document.querySelectorAll(
    //   ".add-to-chrome-button"
    // )

    // add event listener to each button
    viewContentEventButtons.forEach((button) => {
      button.addEventListener("click", viewContentEvent)
    })

    // add event listener to each button
    CompleteRegistrationButtons.forEach((button) => {
      button.addEventListener("click", CompleteRegistrationEvent)
    })

    // add event listener to each button
    initiateCheckoutEventButtons.forEach((button) => {
      button.addEventListener("click", initiateCheckoutEvent)
    })

    return () => {
      // remove event listener from each button
      viewContentEventButtons.forEach((button) => {
        button.removeEventListener("click", viewContentEvent)
      })

      // add event listener to each button
      CompleteRegistrationButtons.forEach((button) => {
        button.addEventListener("click", CompleteRegistrationEvent)
      })

      // add event listener to each button
      initiateCheckoutEventButtons.forEach((button) => {
        button.addEventListener("click", initiateCheckoutEvent)
      })
    }
  }, [])
  return <>{children}</>
}

export default MetaWrapper
