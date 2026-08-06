import { useEffect, useState } from "react";
import { ArrowUp, Bot, Phone, MessageCircle, X, Send } from "lucide-react";

import { RESTAURANT } from "@/data/restaurant";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CANNED: { q: string; a: string }[] = [
  { q: "What are your timings?", a: "We're open every day from 12 PM until 6 AM." },
  { q: "Do you take reservations?", a: "Yes — use the booking form on this page, or call +91 98339 22922." },
  { q: "Where are you located?", a: "MHADA Corner, opposite Platinum Heights, Andheri West, Mumbai 400053." },
  { q: "Any offers today?", a: "Happy hours run 4–8 PM daily: 1+1 on cocktails, beer and mocktails." },
];

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent" aria-hidden>
      <div
        className="h-full bg-[image:var(--gradient-gold)] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const [chat, setChat] = useState(false);
  const [log, setLog] = useState<{ from: "bot" | "you"; text: string }[]>([
    { from: "bot", text: "Hi! I'm the Versova Vibes assistant. Ask me about timings, offers or bookings." },
  ]);
  const [draft, setDraft] = useState("");

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const answer = (question: string) => {
    const match = CANNED.find((c) => c.q.toLowerCase() === question.toLowerCase());
    setLog((l) => [
      ...l,
      { from: "you", text: question },
      {
        from: "bot",
        text:
          match?.a ??
          "Good question — our team can answer that instantly on WhatsApp at +91 98339 22922.",
      },
    ]);
  };

  return (
    <>
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
        {chat ? (
          <div className="glass-strong flex h-96 w-[19rem] flex-col overflow-hidden rounded-3xl shadow-luxe duration-300 animate-in slide-in-from-bottom-4">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <span className="flex items-center gap-2 text-sm font-semibold">
                <Bot className="size-4 text-primary" /> Vibes Assistant
              </span>
              <button onClick={() => setChat(false)} aria-label="Close chat">
                <X className="size-4 text-muted-foreground" />
              </button>
            </div>
            <div className="flex-1 space-y-3 overflow-y-auto p-4">
              {log.map((m, i) => (
                <p
                  key={i}
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-xs ${
                    m.from === "bot"
                      ? "bg-surface text-foreground"
                      : "ml-auto bg-primary text-primary-foreground"
                  }`}
                >
                  {m.text}
                </p>
              ))}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {CANNED.map((c) => (
                  <button
                    key={c.q}
                    onClick={() => answer(c.q)}
                    className="rounded-full border border-primary/40 px-2.5 py-1 text-[10px] text-primary transition-colors hover:bg-primary/10"
                  >
                    {c.q}
                  </button>
                ))}
              </div>
            </div>
            <form
              className="flex items-center gap-2 border-t border-border p-3"
              onSubmit={(e) => {
                e.preventDefault();
                if (!draft.trim()) return;
                answer(draft.trim());
                setDraft("");
              }}
            >
              <Input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Type a message…"
                aria-label="Message the assistant"
                className="h-9 rounded-full bg-card text-xs"
              />
              <Button type="submit" variant="luxe" size="icon" aria-label="Send message">
                <Send className="size-3.5" />
              </Button>
            </form>
          </div>
        ) : null}

        {showTop ? (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="glass grid size-11 place-items-center rounded-full text-primary transition-transform duration-300 hover:-translate-y-1"
          >
            <ArrowUp className="size-4" />
          </button>
        ) : null}

        <button
          onClick={() => setChat((c) => !c)}
          aria-label="Open chat support"
          className="glass grid size-12 place-items-center rounded-full text-primary transition-transform duration-300 hover:scale-110"
        >
          <Bot className="size-5" />
        </button>

        <a
          href={RESTAURANT.phoneHref}
          aria-label="Call the restaurant"
          className="grid size-12 place-items-center rounded-full bg-[image:var(--gradient-gold)] text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:scale-110"
        >
          <Phone className="size-5" />
        </a>

        <a
          href={RESTAURANT.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="grid size-14 place-items-center rounded-full bg-veg text-background shadow-luxe transition-transform duration-300 hover:scale-110"
        >
          <MessageCircle className="size-6" />
        </a>
      </div>
    </>
  );
}

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      if (!localStorage.getItem("vv-cookies")) setShow(true);
    }, 1800);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div className="glass-strong fixed bottom-5 left-5 z-50 max-w-sm rounded-3xl p-5 shadow-luxe duration-500 animate-in slide-in-from-bottom-4">
      <p className="text-sm text-muted-foreground">
        We use cookies to remember your cart and improve your experience on our site.
      </p>
      <div className="mt-4 flex gap-2">
        <Button
          variant="luxe"
          size="sm"
          onClick={() => {
            localStorage.setItem("vv-cookies", "accepted");
            setShow(false);
          }}
        >
          Accept
        </Button>
        <Button variant="ghost" size="sm" onClick={() => setShow(false)}>
          Dismiss
        </Button>
      </div>
    </div>
  );
}

export function Loader() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[100] grid place-items-center bg-background"
      style={{ animation: "loader-out 1.1s var(--ease-apple) forwards" }}
    >
      <div className="text-center">
        <span className="mx-auto grid size-16 animate-pulse place-items-center rounded-full border border-primary/40 font-[family-name:var(--font-display)] text-2xl text-primary">
          V
        </span>
        <p className="mt-4 font-[family-name:var(--font-button)] text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
          Versova Vibes
        </p>
      </div>
    </div>
  );
}
