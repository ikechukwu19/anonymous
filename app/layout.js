"use client";
import "./globals.css";
import { RecoilRoot } from "recoil";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <RecoilRoot>
        <body className=" bg-dark font-grotesk">{children}</body>
      </RecoilRoot>
    </html>
  );
}
