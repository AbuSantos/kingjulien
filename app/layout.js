import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abusomwan Santos | Front-End & Full Stack Developer",
  description:
    "Abusomwan Santos is a Front-End and Full Stack Web Developer specializing in React, Next.js, Web3, UI/UX design, and scalable web applications. Founder and product engineer building real-world digital solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen pb-48">
          <Header />
          {children}
          <div className="fixed w-full bottom-0">
            <Nav />
          </div>
        </div>
      </body>
    </html>
  );
}
