import "../styles/globals.css";
import { Urbanist, Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Head from 'next/head';



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
     <> 
   <Head>
  {/* Title & opis */}
  <title>ResellerBalkan – Reselling Hrvatska 2025</title>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description"
        content="Prvi reselling program u Hrvatskoj i na Balkanu. Nauči kako da pokreneš profitabilan online biznis preprodajom proizvoda." />
  <meta name="keywords"
        content="reselling hrvatska, online zarada, reselling program, preprodaja, dropshipping" />

  {/* Canonical da konsoliduje sve signale */}
  <link rel="canonical" href="https://www.resellerblkn.com/" />

  {/* Open Graph + Twitter Card */}
  <meta property="og:title" content="ResellerBalkan – Reselling Hrvatska 2025" />
  <meta property="og:description" content="Uđi u provereni reselling program i kreni da zarađuješ online još danas." />
  <meta property="og:image" content="https://www.resellerblkn.com/images/tkosamja.webp" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:url" content="https://www.resellerblkn.com/" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="https://www.resellerblkn.com/images/tkosamja.webp" />

  {/* Favicon */}
  <link rel="icon" href="https://www.resellerblkn.com/images/logo.png"/>
</Head>



    <main className={`${urbanist.variable} ${inter.variable} font-sans`}>
      <Component {...pageProps} />
      <SpeedInsights />
    </main>
    
    
    
    
    </>
   
  
  );
}
