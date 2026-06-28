import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/layout/Header";


export const metadata: Metadata = {
  title: 'MAKKIM',
  description: '가장 믿을 수 있는 펫시터를 찾아보세요',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main >
          {children}
        </main>
      </body>
    </html>
  )
}
