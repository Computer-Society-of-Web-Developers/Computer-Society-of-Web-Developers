import Link from "next/link";

export default function page() {
  return (
    <>
      <div className="block text-center text-2xl font-bold">Welcome to CSWD</div>
      <ul className="mt-4">
        <li>
          <Link href={"/join"} className="block text-center text-blue-500">Join the club</Link>
        </li>
        <li>
          <Link href={"/api"} className="block text-center text-blue-500">Check the API route</Link>
        </li>
      </ul>
    </>
  )
}
