import type { Metadata } from "next";
import { Archivo, Darker_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const darkerGrotesque = Darker_Grotesque({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Avenir",
  description: "Avenir 3D — Prototipagem e manufatura aditiva",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${archivo.variable} ${darkerGrotesque.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
