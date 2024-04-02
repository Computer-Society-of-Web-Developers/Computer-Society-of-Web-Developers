
"use client"

import Link from "next/link"
import NetworkSecure from "@/components/NetworkSecure";

export default function page() {

  return <NetworkSecure element={
    <>
      <div className="block text-center text-2xl font-bold">Welcome to CSWD</div>
      <ul className="mt-4">
        <li>
          <Link href={"/api"} className="block text-center text-blue-500">Check the API route</Link>
        </li>
      </ul>
    </>
  } />

}
