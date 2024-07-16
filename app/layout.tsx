import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavabarComponent from "@/components/Navbar";
import FooterCustom from "@/components/Home/FooterCustom";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Desa Margaasih Cicalengka",
  description: "Desa Margaasih Cicalengka merupakan desa yang terletak di Cicalengka Kabupaten Bandung, Desa Margaasih Cicalengka terletak di pegunungan. Desa Margaasih cicalengka juga terkenal dengan industri kerudung atau hijabnya yang telah tersebar ke seluruh warga indonesia.",
  creator: "Muchamad Aqmal Hidayat",
  authors: [{name: "Muchamad Aqmal Hidayat", url: "https://www.linkedin.com/in/muchamad-aqmal-7840332b5/"}],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <NavabarComponent />
        <main className="pt-12">{children}</main>
        <FooterCustom />
      </body>
    </html>
  );
}
