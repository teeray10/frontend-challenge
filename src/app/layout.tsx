import type { Metadata } from "next";
import "./globals.css";
import Header from '@/app/_components/header';
import Footer from '@/app/_components/footer';

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Dotslash Frontend Challenge</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Suez+One&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
      </head>
      <body className="font-pt_sans min-h-screen">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
