import "./globals.css";
import Header from '@/app/_components/header';
import Footer from '@/app/_components/footer';
import {ReactNode} from 'react';

export default function RootLayout({children}: Readonly<{children: ReactNode}>) {
  return (
    <html lang="en">
      <head>
        <title>Dotslash Frontend Challenge - Taylor Ray</title>
        <meta name="description" content="A one page prototype built by Taylor Ray as part of a technical assessment for the Dotslash Frontend Developer role." />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Suez+One&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
      </head>
      <body className="font-pt_sans min-h-screen tracking-wide">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
