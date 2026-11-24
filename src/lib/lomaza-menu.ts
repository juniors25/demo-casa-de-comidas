export type MenuItem = {
  id: string;
  category: string;
  name: string;
  description?: string;
  price: number;
  secondaryPrice?: number;
  secondaryLabel?: string;
  emoji: string;
};

// Carta transcripta de la imagen enviada por el restaurante. Valores en pesos argentinos.
export const lomazaMenu: MenuItem[] = [
  { id: 'hamb-especial', category: 'Hamburguesas', name: 'Especial XXL', description: 'Verdura, jamón, queso y huevo', price: 16000, emoji: '🍔' },
  { id: 'hamb-lomaza', category: 'Hamburguesas', name: 'Lomaza XXL', description: 'Panceta y cheddar', price: 18000, emoji: '🍔' },
  { id: 'hamb-pizza', category: 'Hamburguesas', name: 'Hamburpizza', price: 18000, emoji: '🍔' },
  { id: 'hamb-combo', category: 'Hamburguesas', name: '2 Cheeseburger + papas + gaseosa', price: 27000, emoji: '🍔' },
  { id: 'sand-lomo-especial', category: 'Sandwich', name: 'Lomo especial', description: 'Jamón, queso y verduras', price: 20000, emoji: '🥪' },
  { id: 'sand-lomo-lomaza', category: 'Sandwich', name: 'Lomo Lomaza', description: 'Panceta y cheddar', price: 23000, emoji: '🥪' },
  { id: 'sand-tostado', category: 'Sandwich', name: 'Tostado', description: 'Pan árabe', price: 13000, emoji: '🥪' },
  { id: 'pizza-muzza', category: 'Pizzas', name: 'Muzza', price: 10000, emoji: '🍕' },
  { id: 'pizza-doble', category: 'Pizzas', name: 'Doble muzza', price: 16000, emoji: '🍕' },
  { id: 'pizza-napo', category: 'Pizzas', name: 'Napolitana', description: 'Muzza y tomate', price: 13000, emoji: '🍕' },
  { id: 'pizza-especial', category: 'Pizzas', name: 'Especial', description: 'Muzza, jamón, morrón y huevo', price: 16500, emoji: '🍕' },
  { id: 'pizza-tropical', category: 'Pizzas', name: 'Tropical', description: 'Muzza, jamón, ananá, cereza y azúcar negra', price: 19000, emoji: '🍕' },
  { id: 'pizza-lomaza', category: 'Pizzas', name: 'Lomaza', description: 'Muzza, cheddar y panceta', price: 20000, emoji: '🍕' },
  { id: 'pancho-simple', category: 'Panchos', name: 'Simple', price: 2500, emoji: '🌭' },
  { id: 'pancho-poncho', category: 'Panchos', name: 'Con poncho', description: 'Jamón y queso', price: 4500, emoji: '🌭' },
  { id: 'pancho-lomaza', category: 'Panchos', name: 'Lomaza', description: 'Cheddar y panceta', price: 5000, emoji: '🌭' },
  { id: 'papas-chicas', category: 'Papas fritas', name: 'Chicas', price: 8000, emoji: '🍟' },
  { id: 'papas-medianas', category: 'Papas fritas', name: 'Medianas', price: 9000, emoji: '🍟' },
  { id: 'papas-grandes', category: 'Papas fritas', name: 'Grandes', price: 11000, emoji: '🍟' },
  { id: 'papas-provenzal', category: 'Papas fritas', name: 'Provenzal y huevo frito', price: 13000, emoji: '🍟' },
  { id: 'papas-bombas', category: 'Papas fritas', name: 'Bombas', description: 'Muzza, jamón y huevo frito', price: 21000, emoji: '🍟' },
  { id: 'papas-lomaza', category: 'Papas fritas', name: 'Lomaza', description: 'Cheddar y salchicha', price: 23000, emoji: '🍟' },
  { id: 'papas-recontra', category: 'Papas fritas', name: 'La recontra Lomaza', description: 'Lomo, cebolla caramelizada, morrón y huevo frito', price: 27000, emoji: '🍟' },
  { id: 'lomo-pizza-8', category: 'Lomo pizza', name: '8 porciones', description: 'Muzza, jamón, queso, huevo, verduras y lomo ve­teado', price: 51000, emoji: '🍕' },
  { id: 'lomo-pizza-4', category: 'Lomo pizza', name: '4 porciones', description: 'Muzza, jamón, queso, huevo, verduras y lomo ve­teado', price: 33000, emoji: '🍕' },
  { id: 'tabla-caballo', category: 'Tabla milanesa', name: 'Caballo', description: 'Huevo frito con ensalada o papa', price: 27000, emoji: '🍽️' },
  { id: 'tabla-napo', category: 'Tabla milanesa', name: 'Napolitana', description: 'Salsa, jamón y queso con ensalada o papas', price: 28000, emoji: '🍽️' },
  { id: 'tabla-lomaza', category: 'Tabla milanesa', name: 'Lomaza', description: 'Cheddar y panceta con ensalada o papa', price: 30000, emoji: '🍽️' },
  { id: 'emp-carne', category: 'Empanadas', name: 'Carne', price: 8000, secondaryPrice: 15000, secondaryLabel: 'docena', emoji: '🥟' },
  { id: 'emp-jamon', category: 'Empanadas', name: 'Jamón y queso', price: 8000, secondaryPrice: 15000, secondaryLabel: 'docena', emoji: '🥟' },
  { id: 'emp-osobuco', category: 'Empanadas', name: 'Osobuco', price: 9000, secondaryPrice: 17000, secondaryLabel: 'docena', emoji: '🥟' },
  { id: 'promo-hamb', category: 'Promos', name: 'Hamburguesa XXL especial + papas chicas', price: 22000, emoji: '⭐' },
  { id: 'promo-lomo', category: 'Promos', name: 'Lomo XXL especial + papas chicas', price: 27000, emoji: '⭐' },
  { id: 'promo-2hamb', category: 'Promos', name: '2 hamburguesas XXL especiales + papas medianas', price: 38000, emoji: '⭐' },
  { id: 'promo-2lomos', category: 'Promos', name: '2 lomos XXL especiales + papas medianas', price: 48000, emoji: '⭐' },
  { id: 'promo-muzza', category: 'Promos', name: 'Muzza + papas medianas', price: 18000, emoji: '⭐' },
  { id: 'promo-panchos', category: 'Promos', name: '4 panchos + agua saborizada 1,5 L', price: 13000, emoji: '⭐' },
  { id: 'promo-frances', category: 'Promos', name: '2 lomos en pan francés', price: 33000, emoji: '⭐' },
];
