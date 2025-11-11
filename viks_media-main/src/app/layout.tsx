import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './global.css';
import '@/styles/animations.css'; // новые глобальные анимации
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VIKS - Your Marketing Partner',
  description: 'Marketing Partner',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head />
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-white">
          <Header />
          <main className="flex-grow w-full bg-white">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}