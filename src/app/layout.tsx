import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LOMAZA Restaurant — Menú y gestión',
  description: 'Menú digital, pedidos QR y gestión para LOMAZA Restaurant.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
