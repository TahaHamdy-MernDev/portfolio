import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
	metadataBase: new URL(
		process.env.NEXT_PUBLIC_SITE_URL || "https://taha-hamdy.vercel.app",
	),
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return children;
}
