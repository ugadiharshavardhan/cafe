import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "./components/SmoothScrollProvider";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Loader from "./components/Loader";
import PageTransition from "./components/PageTransition";
import AmbientSoundToggle from "./components/AmbientSoundToggle";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Ca Phe Bistro | Premium Cinematic Cafe Experience",
  description: "Experience the art of coffee in Hyderabad with Ca Phe Bistro. Premium brewing, luxury ambience, and cinematic interactions.",
  manifest: "/manifest.json", // Add manifest for PWA support
};

import BookingProvider from "./components/BookingProvider";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased dark`}
    >
      <body className="min-h-full bg-matte-black text-latte grain">
        <Loader />
        <CustomCursor />
        <AmbientSoundToggle />
        <SmoothScrollProvider>
          <BookingProvider>
            <Navbar />
            <PageTransition>
              <main className="relative z-10 w-full overflow-x-hidden">
                {children}
              </main>
            </PageTransition>
          </BookingProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

