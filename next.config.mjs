/** @type {import('next').NextConfig} */
import withPWA from "next-pwa";

const nextConfig = {
    ...withPWA({
        dest: "public",
        register: true,
        skipWating: true,
        // sw: "service-worker.ts",
    })
};

export default nextConfig;
