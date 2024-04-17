import { Rubik } from "next/font/google";
import '@/styles/globals.scss'
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import ReduxProvider from "@/components/redux-provider/ReduxProvider";
import { Metadata } from "next";

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
          <ReduxProvider>
            {children}    
          </ReduxProvider>
        </main>
      </body>
    </html>
  );
}
