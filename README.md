# LOMAZA Restaurant — demo de gestión gastronómica

Aplicación demo para LOMAZA, con panel administrativo y menú digital con pedido QR funcional.

## Ejecutar en Windows

Node.js 20.9 o posterior. Abrí PowerShell o CMD en esta carpeta y ejecutá cada comando por separado:

```bat
npm install
npm run dev
```

El panel está en http://localhost:3000 y el menú QR en http://localhost:3000/qr.

Para probar el escaneo con un teléfono conectado a la misma red Wi-Fi:

```bat
npm run dev -- --hostname 0.0.0.0
```

Abrí el menú desde la IP local de tu PC, por ejemplo `http://192.168.1.20:3000/qr`, y escaneá el QR mostrado. La IP concreta se obtiene con `ipconfig` en Windows (dirección IPv4 del adaptador Wi-Fi). El QR se genera para la dirección desde la que abriste la página, así que usá la IP local y no `localhost` en el teléfono.

## Menú y pedidos

La carta de la página `/qr` se transcribió de la imagen proporcionada. El cliente filtra categorías, agrega productos y cantidades (incluye empanadas por media/docena), elige mesa o para llevar y envía la comanda. El pedido queda guardado localmente en el navegador como canal QR, con estado Nuevo; para verlo en el panel, volvé a `http://localhost:3000` y recargá la página.

La aplicación es demostrativa: no integra pagos, proveedores ni facturación fiscal. El QR apunta a la dirección local de tu computadora y no es una dirección pública de internet.
