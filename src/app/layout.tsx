"use client";

import { ProtectedRoutes } from "@/components/protected-routes";
import "./globals.css";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    document.documentElement.classList.add("loaded");
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Jorge | Portfolio</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <ProtectedRoutes>
        <body className="flex flex-col h-screen w-full font-poppins overflow-hidden">
          <div className="h-full w-full overflow-auto">{children}</div>
        </body>
      </ProtectedRoutes>
    </html>
  );
}
