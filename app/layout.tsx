import type { Metadata } from "next";
import "./globals.css";
import NextThemeProviders from "./context/NextThemeProvider";
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/home/Footer";

export const metadata: Metadata = {
  title: "Business App -Asikur",
  description: "Asikur Business app",
  keywords: "asikur,asikur portfolio,asikur business app, asikur,ashikur asikur rahman,ecommerce website,website themes,top website,web design,website,website development",
  icons: {
    icon:"/favicon.ico"
  }
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
        </NextThemeProviders>
      </body>
    </html>
  );
}
