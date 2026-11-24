'use client';

import { useMemo, useState } from 'react';
import { Check, ChevronDown, Minus, Plus, ShoppingBag, UtensilsCrossed, X } from 'lucide-react';
import { lomazaMenu } from '@/lib/lomaza-menu';
import styles from './qr-menu.module.css';

type CartLine = { itemId: string; quantity: number; dozen?: boolean };
const money = (amount: number) => '$' + amount.toLocaleString('es-AR');

export default function QrMenu() {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [category, setCategory] = useState('Todo');
  const [customer, setCustomer] = useState('');
  const [place, setPlace] = useState('Mesa 1');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const categories = ['Todo', ...Array.from(new Set(lomazaMenu.map(item => item.category)))];
  const shown = category === 'Todo' ? lomazaMenu : lomazaMenu.filter(item => item.category === category);
  const total = useMemo(() => cart.reduce((sum, line) => {
    const item = lomazaMenu.find(menuItem => menuItem.id === line.itemId);
    if (!item) return sum;
    return sum + (line.dozen && item.secondaryPrice ? item.secondaryPrice : item.price) * line.quantity;
  }, 0), [cart]);
  const cartCount = cart.reduce((sum, line) => sum + line.quantity, 0);

  function changeQuantity(itemId: string, delta: number, dozen = false) {
    setCart(current => {
      const existing = current.find(line => line.itemId === itemId && Boolean(line.dozen) === dozen);
      if (!existing && delta > 0) return [...current, { itemId, quantity: 1, dozen }];
      return current.map(line => line.itemId === itemId && Boolean(line.dozen) === dozen ? { ...line, quantity: line.quantity + delta } : line).filter(line => line.quantity > 0);
    });
    setError('');
  }

  function submitOrder() {
    if (!cart.length) { setError('Elegí al menos un producto para hacer el pedido.'); return; }
    if (!customer.trim()) { setError('Escribí tu nombre para identificar el pedido.'); return; }
    try {
      const saved = localStorage.getItem('sazon-demo');
      const data = saved ? JSON.parse(saved) : {};
      const orderId = `QR-${Date.now().toString().slice(-6)}`;
      const items = cart.map(line => {
        const product = lomazaMenu.find(item => item.id === line.itemId)!;
        return { name: `${product.name}${line.dozen ? ' (docena)' : ''}`, qty: line.quantity, price: line.dozen && product.secondaryPrice ? product.secondaryPrice : product.price };
      });
      const order = {
        id: orderId,
        table: place === 'Para llevar' ? 'Para llevar' : place,
        customer: customer.trim(),
        channel: 'QR',
        items,
        status: 'Nuevo',
        time: new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' }),
        payment: 'Pendiente',
      };
      localStorage.setItem('sazon-demo', JSON.stringify({ ...data, orders: [order, ...(data.orders ?? [])] }));
      setSent(true);
    } catch {
      setError('No pudimos guardar el pedido en este navegador. Probá de nuevo.');
    }
  }

  if (sent) return <main className={styles.successPage}><div className={styles.successCard}><span className={styles.successIcon}><Check size={26}/></span><p className={styles.kicker}>LOMAZA RESTAURANT</p><h1>¡Pedido recibido!</h1><p>Gracias, {customer}. Tu pedido para <strong>{place}</strong> ya fue enviado a la cocina.</p><div className={styles.successTotal}><span>Total del pedido</span><strong>{money(total)}</strong></div><p className={styles.demoNote}>Demo: no se realizó ningún cobro. El equipo puede ver este pedido en el panel de gestión al actualizar la página.</p><button className={styles.primaryButton} onClick={() => { setCart([]); setCustomer(''); setSent(false); }}>Volver al menú</button></div></main>;

  return <main className={styles.page}>
    <header className={styles.hero}>
      <div className={styles.heroLogo}><UtensilsCrossed size={26}/><div><strong>LOMAZA</strong><span>R E S T A U R A N T</span></div></div>
      <p className={styles.heroTag}>Hamburguesas · lomos · pizzas · mucho más</p>
      <div className={styles.heroBottom}><span><i/> Abierto · pedidos para salón y para llevar</span><a href="tel:2613350735">📞 261 335 0735</a></div>
    </header>
    <section className={styles.intro}><div><p className={styles.kicker}>MENÚ DIGITAL</p><h1>Elegí tus favoritos</h1><p>Tu pedido llega directo a cocina. Pagás en el local.</p></div><div className={styles.qrBox}><img src={`https://api.qrserver.com/v1/create-qr-code/?size=112x112&data=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} alt="Código QR del menú de Lomaza"/><small>Escaneá para abrir el menú</small></div></section>
    <div className={styles.categoryScroller}>{categories.map(item => <button key={item} className={category === item ? styles.activeCategory : ''} onClick={() => setCategory(item)}>{item}</button>)}</div>
    <section className={styles.menuGrid}>{shown.map(item => {
      const regular = cart.find(line => line.itemId === item.id && !line.dozen)?.quantity ?? 0;
      const dozen = cart.find(line => line.itemId === item.id && line.dozen)?.quantity ?? 0;
      return <article className={styles.product} key={item.id}><div className={styles.emoji}>{item.emoji}</div><div className={styles.details}><div className={styles.titleRow}><h2>{item.name}</h2><strong>{money(item.price)}</strong></div>{item.description && <p>{item.description}</p>}{item.secondaryPrice && <div className={styles.secondary}><span>Docena · {money(item.secondaryPrice)}</span><Quantity value={dozen} onChange={delta => changeQuantity(item.id, delta, true)}/></div>}<div className={styles.productBottom}>{item.secondaryPrice ? <span>Media · {money(item.price)}</span> : <span>Preparado al momento</span>}<Quantity value={regular} onChange={delta => changeQuantity(item.id, delta)}/></div></div></article>;
    })}</section>
    <footer className={styles.footer}><p>LOMAZA · Hecho con ganas, para compartir.</p><a href="tel:2613350735">Pedidos: 261 335 0735</a><small>La facturación y el pago online no están habilitados en esta demo.</small></footer>
    {cartCount > 0 && <div className={styles.cartBar}><div><strong>{cartCount} {cartCount === 1 ? 'producto' : 'productos'}</strong><span>{money(total)}</span></div><button onClick={() => document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' })}>Ver pedido <ShoppingBag size={17}/></button></div>}
    <section id="checkout" className={styles.checkout}><div><p className={styles.kicker}>UN ÚLTIMO PASO</p><h2>¿A dónde lo llevamos?</h2><p>Confirmá tus datos y enviamos la comanda.</p></div><div className={styles.checkoutFields}><label>Tu nombre<input value={customer} onChange={event => setCustomer(event.target.value)} placeholder="Ej. Martina"/></label><label>Modalidad<select value={place} onChange={event => setPlace(event.target.value)}><option>Mesa 1</option><option>Mesa 2</option><option>Mesa 3</option><option>Mesa 4</option><option>Para llevar</option></select></label><div className={styles.checkoutTotal}><span>Total</span><strong>{money(total)}</strong></div>{error && <p className={styles.error}>{error}</p>}<button className={styles.primaryButton} onClick={submitOrder}>Enviar pedido a cocina <ChevronDown size={17}/></button><small className={styles.demoNote}>Pedido de demostración: no se procesa ningún pago.</small></div></section>
    <a className={styles.cartFloat} href="#checkout" aria-label="Ir al pedido">{cartCount}<ShoppingBag size={19}/></a>
  </main>;
}

function Quantity({ value, onChange }: { value: number; onChange: (delta: number) => void }) {
  return <div className={styles.quantity}><button onClick={() => onChange(-1)} aria-label="Quitar uno"><Minus size={13}/></button><b>{value}</b><button onClick={() => onChange(1)} aria-label="Agregar uno"><Plus size={13}/></button></div>;
}
