import { useEffect, useState } from "react";
import { Menu, Search, ShoppingBag, Sun, Moon, X, MessageCircle } from "lucide-react";

import { RESTAURANT } from "@/data/restaurant";
import { MENU } from "@/data/menu";
import { useStore } from "./store";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

const LINKS = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Menu", "#menu"],
  ["Gallery", "#gallery"],
  ["Offers", "#offers"],
  ["Events", "#events"],
  ["Reservation", "#reservation"],
  ["Reviews", "#reviews"],
  ["Blog", "#blog"],
  ["Contact", "#contact"],
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [light, setLight] = useState(false);
  const { count, cart, total, remove, clear } = useStore();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearch((s) => !s);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "glass-strong py-2 shadow-luxe" : "bg-transparent py-4",
        )}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5"
          aria-label="Primary"
        >
          <a href="#home" className="group flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-full border border-primary/40 font-[family-name:var(--font-display)] text-lg text-primary transition-transform duration-500 group-hover:rotate-12">
              V
            </span>
            <span className="leading-tight">
              <span className="block font-[family-name:var(--font-display)] text-base font-semibold">
                Versova Vibes
              </span>
              <span className="block font-[family-name:var(--font-button)] text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Cafe &amp; Bar
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 xl:flex">
            {LINKS.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="relative rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1.5">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Search the menu"
              onClick={() => setSearch(true)}
            >
              <Search className="size-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle light and dark mode"
              onClick={() => setLight((l) => !l)}
            >
              {light ? <Moon className="size-4" /> : <Sun className="size-4" />}
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label={`Cart, ${count} items`}>
                  <span className="relative">
                    <ShoppingBag className="size-4" />
                    {count > 0 ? (
                      <span className="absolute -right-2 -top-2 grid size-4 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                        {count}
                      </span>
                    ) : null}
                  </span>
                </Button>
              </SheetTrigger>
              <SheetContent className="glass-strong w-full sm:max-w-md">
                <SheetHeader>
                  <SheetTitle className="font-[family-name:var(--font-display)] text-2xl">
                    Your Order
                  </SheetTitle>
                </SheetHeader>
                <div className="flex h-full flex-col gap-4 overflow-y-auto px-4 pb-8">
                  {cart.length === 0 ? (
                    <p className="text-sm text-muted-foreground">
                      Your cart is empty. Add something delicious from the menu.
                    </p>
                  ) : (
                    <>
                      <ul className="space-y-3">
                        {cart.map((line) => (
                          <li
                            key={line.name}
                            className="flex items-center justify-between gap-3 rounded-xl bg-surface/70 p-3"
                          >
                            <div>
                              <p className="text-sm font-medium">{line.name}</p>
                              <p className="text-xs text-muted-foreground">
                                ₹{line.price} × {line.qty}
                              </p>
                            </div>
                            <button
                              onClick={() => remove(line.name)}
                              aria-label={`Remove one ${line.name}`}
                              className="rounded-full p-2 text-muted-foreground transition-colors hover:text-destructive"
                            >
                              <X className="size-4" />
                            </button>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto space-y-3 border-t border-border pt-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Subtotal</span>
                          <span className="font-semibold">₹{total}</span>
                        </div>
                        <Button variant="luxe" className="w-full" asChild>
                          <a href={RESTAURANT.whatsapp} target="_blank" rel="noreferrer">
                            Checkout on WhatsApp
                          </a>
                        </Button>
                        <Button variant="ghost" className="w-full" onClick={clear}>
                          Clear cart
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>

            <Button variant="luxe" size="sm" className="hidden sm:inline-flex" asChild>
              <a href="#reservation">Reserve Table</a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:inline-flex"
              aria-label="Chat on WhatsApp"
              asChild
            >
              <a href={RESTAURANT.whatsapp} target="_blank" rel="noreferrer">
                <MessageCircle className="size-4" />
              </a>
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="xl:hidden" aria-label="Open menu">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="glass-strong w-72">
                <SheetHeader>
                  <SheetTitle className="font-[family-name:var(--font-display)] text-2xl">
                    Menu
                  </SheetTitle>
                </SheetHeader>
                <ul className="space-y-1 px-4">
                  {LINKS.map(([label, href]) => (
                    <li key={href}>
                      <a
                        href={href}
                        onClick={() => setOpen(false)}
                        className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      <CommandDialog open={search} onOpenChange={setSearch}>
        <CommandInput placeholder="Search dishes, drinks, desserts…" />
        <CommandList>
          <CommandEmpty>Nothing on the menu matches that.</CommandEmpty>
          {MENU.map((cat) => (
            <CommandGroup key={cat.id} heading={`${cat.icon} ${cat.label}`}>
              {cat.items.map((item) => (
                <CommandItem
                  key={`${cat.id}-${item.name}`}
                  value={`${item.name} ${cat.label}`}
                  onSelect={() => {
                    setSearch(false);
                    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <span>{item.name}</span>
                  <span className="ml-auto text-primary">₹{item.price}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}
