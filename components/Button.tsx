"use client"

import { signOut } from "next-auth/react";

export default function Button(){
    return (
        <button
      onClick={() => {signOut({ callbackUrl: "/" })}}
      className="mt-4 px-3 py-2 bg-red-500 text-white rounded"
    >
      Sign Out
    </button>
    )
}