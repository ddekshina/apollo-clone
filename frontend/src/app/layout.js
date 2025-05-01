import { Inter } from 'next/font/google';
import './globals.css';
import { metadata } from './metadata';

// Use Inter font
const inter = Inter({ subsets: ['latin'] });

export { metadata };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}