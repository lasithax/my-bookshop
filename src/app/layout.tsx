"use client";

import "./globals.css";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <BrowserRouter>
          <MantineProvider>{children}</MantineProvider>
        </BrowserRouter>
      </body>
    </html>
  );
}
