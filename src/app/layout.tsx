import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Lato} from 'next/font/google'

import Header from "@/components/Header";

const lato = Lato({subsets: ['latin'],
  weight: ['400', '700']
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Itau",
  description: "Tenha seu banco na palma da mão.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lato.className} antialiased`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
