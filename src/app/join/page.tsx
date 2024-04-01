import Link from "next/link";

export default function page() {
    return (
        <>
            <div className="text-center text-2xl font-bold">Join our community</div>
            <Link href={"/"} className="text-blue-500 block text-center mt-4">Move to Home page</Link>
        </>
    )
}
