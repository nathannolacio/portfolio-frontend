import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

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
        className="min-h-screen flex flex-col bg-bg text-text h-full antialiased"
      >
        {children}
      </div>
    </NextIntlClientProvider>
  );
}