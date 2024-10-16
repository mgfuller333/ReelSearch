"use client"

import React from "react"
import { CommentSection } from "react-comments-section"

import "react-comments-section/dist/index.css"

const DefaultCommentSection = () => {
  const data = [
    {
      userId: "02b",
      comId: "017",
      fullName: "Lily",
      userProfile: "https://www.linkedin.com/in/riya-negi-8879631a9/",
      text: "That was so good!",
      timestamp: "2024-09-28T10:34:56Z",
      avatarUrl: "https://ui-avatars.com/api/name=Lily&background=random",
      replies: [],
    },
  ]

  return (
    <div className="text-black">
      <CommentSection
        currentUser={{
          currentUserId: "01a",
          currentUserImg:
            "https://ui-avatars.com/api/name=Riya&background=random",
          currentUserProfile:
            "https://www.linkedin.com/in/riya-negi-8879631a9/",
          currentUserFullName: "Riya Negi",
        }}
        logIn={{
          onLogin: () => alert("Call login function"),
          signUpLink: "http://localhost:3000/",
        }}
        commentData={data}
        placeHolder={"Write a comment..."}
        onSubmitAction={(data) => console.log("check submit,", data)}
        currentData={(data) => {
          console.log("current data", data)
        }}
      />
    </div>
  )
}

export default DefaultCommentSection
