# Sazón — demo de gestión gastronómica

Aplicación demo para una casa de comidas, construida con Next.js, React y TypeScript. Incluye panel de operación y gestión para pedidos, cocina, menú, inventario, compras, caja, facturación simulada y reportes.

## Requisitos

- Node.js 20.9 o posterior
- npm

## Ejecutar localmente

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

Para validar la compilación:

```bash
npm run build
```

## Módulos incluidos

- **Inicio:** ventas, pedidos activos, ticket promedio, alertas y actividad reciente.
- **Pedidos:** búsqueda, filtros por estado, creación de pedidos y transiciones de estado.
- **Cocina:** tablero de comandas por preparar, en preparación y listas para entregar.
- **Menú digital:** catálogo, disponibilidad, precios, vista de QR (demo) y alta de productos.
- **Stock y compras:** niveles mínimos, alertas y recepción de mercadería con actualización de inventario.
- **Caja:** resumen por medios de pago, estado del turno y registro de movimientos demo.
- **Facturación:** emisión simulada de comprobantes sin conexión fiscal.
- **Reportes:** ventas, pedidos, ticket promedio y productos destacados.

Los cambios se persisten en `localStorage` del navegador. La aplicación es una demo frontend: no incluye backend multiusuario, persistencia compartida ni integración real con AFIP/ARCA, pagos o proveedores. Los datos se pueden restablecer borrando el almacenamiento del sitio.
