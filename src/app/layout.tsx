import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nathan Nolacio | Fullstack Developer",
  description: "Fullstack developer portfolio built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={"h-full antialiased"}
    >
      <body className={`${geist.className} min-h-screen flex flex-col bg-zinc-200 text-zinc-900`}>{children}</body>
    </html>
  );
}
