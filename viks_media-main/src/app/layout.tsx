import './global.css'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <Header />

        {/* 
          Вот наша новая обёртка, которая масштабирует только контент 
          (хедер и футер остаются нетронутыми)
        */}
        <div
          style={{
            zoom: 0.9;
          }}
        >
          <main className="flex-grow container mx-auto px-6 py-8">
            {children}
          </main>
        </div>

        <Footer />
      </body>
    </html>
  )
}
