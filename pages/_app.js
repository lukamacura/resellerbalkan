import "../styles/globals.css";
import { Urbanist, Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"


const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${urbanist.variable} ${inter.variable} font-sans`}>
      <Component {...pageProps} />
      <SpeedInsights />
    </main>
  );
}
