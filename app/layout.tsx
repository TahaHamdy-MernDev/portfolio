import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const ThemeProvider = dynamic(() => import("./provider"), { ssr: true });

import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taha | MERN Stack Developer | Web Optimization Specialist",
  description:
    "Experienced MERN Stack Developer specializing in web development, optimization, and SEO. Expertise in React.js, Node.js, Express, MongoDB, and more. Delivering high-performance, user-friendly web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
