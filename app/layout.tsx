import { AppProvider } from "./context/AppProvider";

import "./globals.css";
import { Inter } from "next/font/google";

// Components
import { Header } from "@/components/Header";
import { Interview } from "@/components/interview/Interview";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Thibaut Barbiera | Portfolio",
  description: "Votre futur développeur web front-end | Next.js, React.js, TypeScript",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <AppProvider>
          <Header />
          <Interview />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
