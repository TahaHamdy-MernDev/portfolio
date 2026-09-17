import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
	metadataBase: new URL(
		process.env.NEXT_PUBLIC_SITE_URL || "https://taha-hamdy.vercel.app",
	),
	verification: {
		google: "6nGaWhd88Bk7ZqdAmHPlZvi7KfkgzaJ3YpAOzVwe6-A",
	},
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return children;
}
