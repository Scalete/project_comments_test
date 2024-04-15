import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import '@/styles/globals.scss'

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Comments Project",
  description: "Comments Project by Maksim",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
