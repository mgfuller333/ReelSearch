"use client"

import React from "react"
import { signOut } from "next-auth/react"

const SignOutButton: React.FC = () => {
  const handleSignOut = async () => {
    await signOut({ redirect: true, callbackUrl: "/" })
  }

  return <button onClick={handleSignOut}>Sign Out</button>
}

export default SignOutButton
