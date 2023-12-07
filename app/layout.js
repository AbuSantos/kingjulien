import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}  `}>
        <div className="h-screen ">
          <Header />
          {children}
          <div className="fixed w-full bottom-0 ">
            <Nav />
          </div>
        </div>
      </body>
    </html>
  );
}
