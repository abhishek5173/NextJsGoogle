import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import Button from "@/components/Button"

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/signin")
  } 
  

  return (
    <div className="p-8">
      <h1 className="text-2xl">Welcome, {session.user?.name}</h1>
      <p>Your email: {session.user?.email}</p>
      <Button/>
    </div>
  )
}
