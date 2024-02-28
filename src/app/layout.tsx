import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";
import Navbar from "./component/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aaditya Kumawat | Portfolio",
  description: "This is Aaditya kumawat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <Providers>
        <body className={`${inter.className} w-full max-h-screen`}>
          <Navbar/>
          <div className="max-w-6xl pt-4 mx-auto px-2" >
          {children}
          </div>
          </body>
      </Providers>
    </html>
  );
}
