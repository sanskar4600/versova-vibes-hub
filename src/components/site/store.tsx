import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type CartLine = { name: string; price: number; qty: number };

type Store = {
  cart: CartLine[];
  wishlist: string[];
  add: (name: string, price: number) => void;
  remove: (name: string) => void;
  clear: () => void;
  toggleWish: (name: string) => void;
  count: number;
  total: number;
};

const StoreContext = createContext<Store | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vv-store");
      if (raw) {
        const parsed = JSON.parse(raw) as { cart?: CartLine[]; wishlist?: string[] };
        if (parsed.cart) setCart(parsed.cart);
        if (parsed.wishlist) setWishlist(parsed.wishlist);
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("vv-store", JSON.stringify({ cart, wishlist }));
    } catch {
      /* ignore */
    }
  }, [cart, wishlist]);

  const value = useMemo<Store>(() => {
    const count = cart.reduce((n, l) => n + l.qty, 0);
    const total = cart.reduce((n, l) => n + l.qty * l.price, 0);
    return {
      cart,
      wishlist,
      count,
      total,
      add: (name, price) =>
        setCart((c) => {
          const found = c.find((l) => l.name === name);
          return found
            ? c.map((l) => (l.name === name ? { ...l, qty: l.qty + 1 } : l))
            : [...c, { name, price, qty: 1 }];
        }),
      remove: (name) =>
        setCart((c) =>
          c
            .map((l) => (l.name === name ? { ...l, qty: l.qty - 1 } : l))
            .filter((l) => l.qty > 0),
        ),
      clear: () => setCart([]),
      toggleWish: (name) =>
        setWishlist((w) => (w.includes(name) ? w.filter((x) => x !== name) : [...w, name])),
    };
  }, [cart, wishlist]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}
