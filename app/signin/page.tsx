"use client"

import { signIn, useSession } from "next-auth/react"
import { redirect } from "next/navigation"

export default function SignIn() {
  const { data: session } = useSession();

  if (session) {
    redirect("/dashboard")
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Sign in to your account</h1>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
      >
        Sign in with Google
      </button>
    </div>
  );
}
