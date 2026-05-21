import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Figure Store VN",
  description: "Mô hình anime chính hãng",
  other: {
    "google": "notranslate",  // ← chặn Google Translate
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}