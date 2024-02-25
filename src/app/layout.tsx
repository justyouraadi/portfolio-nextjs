import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";
import Navbar from "./component/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <Providers>
        <body className={`${inter.className} min-h-screen`}>
          <Navbar/>
          <div className="max-w-5xl pt-4 mx-auto h-screen px-2" >
          {children}
          </div>
          </body>
      </Providers>
    </html>
  );
}
