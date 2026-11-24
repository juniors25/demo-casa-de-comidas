'use client';

import dynamic from 'next/dynamic';

const QrMenu = dynamic(() => import('./qr-menu'), {
  ssr: false,
  loading: () => <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', color: '#315b39', fontFamily: 'Arial, sans-serif' }}>Cargando menú de LOMAZA…</main>,
});

export default function QrClientPage() {
  return <QrMenu />;
}
