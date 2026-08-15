import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	cacheComponents: true,
	allowedDevOrigins: ["192.168.100.11"],
	/* config options here */
};

export default nextConfig;
