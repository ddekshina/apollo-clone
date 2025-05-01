import { Inter } from 'next/font/google';
import './globals.css';

// Use Inter font instead of Geist
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Apollo247 Clone - Consult Top General Physicians Online',
  description: 'Book appointments with top general physicians and internal medicine specialists. Get medical advice, second opinions, and medical prescriptions online.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}