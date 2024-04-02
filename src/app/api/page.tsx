"use client"


import NetworkSecure from "@/components/NetworkSecure";
import Link from "next/link";
import React from "react";

export default function page() {
    return <NetworkSecure element={
        <div className="max-w-4xl mx-auto mt-10 align-middle justify-center flex flex-col">
            <h1 className="text-3xl font-bold mb-4">Available APIs Documentations</h1>
            <h3><Link className="text-blue-500" href={"/"}>Home</Link></h3>

            <div className="bg-gray-300 shadow-md rounded-md p-4 mb-4 mt-4">
                <h2 className="text-xl font-bold mb-2">Feedback</h2>
                <p className="text-gray-600 mb-2">Endpoint: <Link className="text-blue-600 mb-2" href={"/api/feedback"}>/api/feedback</Link></p>
                <p className="text-gray-600 mb-2">Method Allowed: GET, POST, PUT, DELETE</p>
                <p className="text-gray-600 mb-2">Authorization: Requires authentication token</p>
            </div>
        </div>
    } />;
}
