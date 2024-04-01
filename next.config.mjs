/** @type {import('next').NextConfig} */
import withPWA from "next-pwa";

const nextConfig = {
    ...withPWA({
        dest: "public",
        register: true,
        skipWating: true,
    })
};

export default nextConfig;
