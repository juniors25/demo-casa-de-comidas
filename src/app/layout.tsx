import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sazón — Gestión para casa de comidas',
  description: 'Demo funcional de gestión para casa de comidas: pedidos, cocina, caja, stock y reportes.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
