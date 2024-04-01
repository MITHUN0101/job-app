import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../component/Navbar";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pacific Health System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {/*  */}
        <Navbar/>
        <div className={inter.className}>
          {children}
        </div>
      </body>
    </html>
  );
}
