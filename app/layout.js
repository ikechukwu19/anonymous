"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { RecoilRoot } from "recoil";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <RecoilRoot>
        <body className=" bg-dark font-grotesk">{children}</body>
      </RecoilRoot>
    </html>
  );
}
