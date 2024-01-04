import type { Metadata } from "next";
import "./globals.css";
import NextThemeProviders from "./context/NextThemeProvider";
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/home/Footer";
import ScrollToTop from "./components/extra/SCrollToTop";
import OneNav from "./components/navbar/OneNav";

export const metadata: Metadata = {
  title: "Business App -Asikur",
  description: "Asikur Business app",
  keywords:
    "asikur,asikur portfolio,asikur business app, asikur,ashikur asikur rahman,ecommerce website,website themes,top website,web design,website,website development",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    title: "Business App -Asikur",
    siteName: "Business App",
    url: "https://businessapp-asikur.vercel.app/",
    images: [
      {
        url: "https://res.cloudinary.com/asikur/image/upload/v1704219718/Screenshot_551_x7x5sq.png",
      },
    ],
  },
  authors: [{ name: "Asikur Rahman", url: "https://asikur.vercel.app" }],
};

export default function RootLayout({
  children,
  team,
  dashboard,
}: {
  children: React.ReactNode;
  team: React.ReactNode;
  dashboard: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NextThemeProviders>
          {" "}
          {/* <OneNav/> */}
          <header>
            {/* <NavBar /> */}
          </header>
          <main className="">
            {children}
            {/* {team} ###parallel routes
            {dashboard} */}
          </main>
          <footer>
            <Footer />
          </footer>
          <ScrollToTop />
        </NextThemeProviders>
      </body>
    </html>
  );
}
