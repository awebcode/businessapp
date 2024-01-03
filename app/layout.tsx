import type { Metadata } from "next";
import "./globals.css";
import NextThemeProviders from "./context/NextThemeProvider";
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/home/Footer";
import ScrollToTop from "./components/extra/SCrollToTop";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NextThemeProviders>
          {" "}
          <header>
            <NavBar />
          </header>
          {children}
          <footer>
            <Footer />
          </footer>
          <ScrollToTop />
        </NextThemeProviders>
      </body>
    </html>
  );
}
