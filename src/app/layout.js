import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/header.js";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const sourceSansPro = Source_Sans_3({
  weight: ["300", "400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Stanford HumSci Homepage",
  description: "Designed by Four Kitchens",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sourceSansPro.variable} font-sans antialiased relative`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
