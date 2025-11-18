import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar"; // 1. Import our new Navbar

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "For Better Days", // You can change this
  description: "A Web3 collective building, hunting, and collaborating.", // You can change this
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 2. Add site-wide styles to the body */}
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        
        {/* 3. Add the Navbar here */}
        <Navbar />
        
        {/* {children} is your page.tsx file */}
        {children}
      
      </body>
    </html>
  );
}