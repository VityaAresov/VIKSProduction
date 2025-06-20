// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './global.css'; // Импорт глобальных стилей
import Header from '@/components/common/Header'; // Импорт компонента шапки
import Footer from '@/components/common/Footer'; // Импорт компонента подвала

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'VIKS - Your Marketing Partner',
    description: 'Marketing Partner',
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <head>
        </head>
        <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                {children}
            </main>
            <Footer />
        </div>
        </body>
        </html>
    );
}