import { Rubik } from "next/font/google";
import '@/styles/globals.scss'
import ReduxProvider from "@/components/redux-provider/ReduxProvider";

const rubik = Rubik({ subsets: ["latin"] });

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
