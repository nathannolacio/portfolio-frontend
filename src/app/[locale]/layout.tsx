import type { Metadata } from "next";
import { Geist, Space_Grotesk } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const geist = Geist({
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Nathan Nolacio | Software Developer",
  description:
    "Software developer portfolio built with Next.js and Tailwind CSS.",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const messages = await getMessages();

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
    >
      <div
        className={`${geist.className} ${spaceGrotesk.variable} min-h-screen flex flex-col bg-neutral-50 text-zinc-800 h-full antialiased`}
      >
        {children}
      </div>
    </NextIntlClientProvider>
  );
}