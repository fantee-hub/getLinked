import Nav from "@/src/components/Nav";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Montserrat, Unica_One } from "next/font/google";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";
import { ThemeProvider, createTheme } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const unicaOne = Unica_One({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-unica",
});

const clashDisplay = localFont({
  src: [
    {
      path: "../public/fonts/ClashDisplay-Bold.otf",
      weight: "700",
    },
    {
      path: "../public/fonts/ClashDisplay-Semibold.otf",
      weight: "600",
    },
    {
      path: "../public/fonts/ClashDisplay-Medium.otf",
      weight: "500",
    },
    {
      path: "../public/fonts/ClashDisplay-Regular.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/ClashDisplay-Light.otf",
      weight: "300",
    },
  ],
  variable: "--font-tt-clashDisplay",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${clashDisplay.variable} ${montserrat.variable} ${unicaOne.variable}`}
      >
        <Nav />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
