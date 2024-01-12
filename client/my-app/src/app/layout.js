"use Client";
import Head from "next/head";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";

//Components

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const inter = Inter({ subsets: ["latin"] });
import Script from "next/script";
import Link from "next/link";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={inter.className}>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
