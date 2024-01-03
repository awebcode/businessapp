import type { Metadata } from "next";
import NextThemeProviders from "../context/NextThemeProvider";
import Footer from "../components/home/Footer";
import DashboardNavbar from "./components/navbar/Navbar";


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
 
}: {
  children: React.ReactNode;
 
}) {
  return (
    <>
     
       
          {/* <OneNav/> */}
          <header>
            <DashboardNavbar />
          </header>
          <main className="">
            {children}
            {/* {team} ###parallel routes
            {dashboard} */}
          </main>
          
          {/* <ScrollToTop /> */}
      
    </>
  );
}
