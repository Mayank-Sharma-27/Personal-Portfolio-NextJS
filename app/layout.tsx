import type { Metadata } from "next";
import { Outfit, Roboto } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto", // This line is added
});

export const metadata: Metadata = {
  title: "Mayank Sharma",
  description: "Personal portfolio of Mayank Sharma",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.className} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
