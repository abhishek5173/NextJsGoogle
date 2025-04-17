
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect} from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/dashboard");
  }
  return (
    <div className="w-full min-h-screen text-2xl font-bold flex justify-center items-center">Home Page
    <Link href={'/signin'} className="p-2 bg-blue-500 rounded-xl text-white"> Sign In</Link>
    </div>

  );
}
