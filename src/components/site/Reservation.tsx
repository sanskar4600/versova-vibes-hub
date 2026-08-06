import { useState, type FormEvent } from "react";
import { CalendarDays, Check, Clock, PartyPopper, Users } from "lucide-react";

import { SectionHeading } from "./SectionHeading";
import { useReveal } from "./use-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TIMES = [
  "12:00 PM",
  "1:30 PM",
  "4:00 PM",
  "6:30 PM",
  "8:00 PM",
  "9:30 PM",
  "11:00 PM",
  "1:00 AM",
];

export function Reservation() {
  const ref = useReveal<HTMLElement>();
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDone(true);
  };

  return (
    <section id="reservation" ref={ref} className="section-pad px-5">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Reservation"
          title="Book your table"
          subtitle="Instant confirmation. Tables are held for 20 minutes past the booking time."
        />

        <div className="reveal mt-12 rounded-[2rem] border border-border bg-card p-6 shadow-luxe sm:p-10">
          {done ? (
            <div className="flex flex-col items-center gap-4 py-10 text-center">
              <span className="grid size-20 place-items-center rounded-full border border-primary/40 bg-primary/10 text-primary duration-700 animate-in zoom-in-50">
                <Check className="size-9" />
              </span>
              <h3 className="text-3xl">Table confirmed</h3>
              <p className="max-w-md text-sm text-muted-foreground">
                Thank you{name ? `, ${name}` : ""} — we've reserved your table at Versova Vibes.
                A confirmation message is on its way to your phone.
              </p>
              <Button variant="outlineGold" onClick={() => setDone(false)}>
                Make another booking
              </Button>
            </div>
          ) : (
            <form className="grid gap-5 sm:grid-cols-2" onSubmit={submit}>
              <div className="space-y-2">
                <Label htmlFor="res-name">Full name</Label>
                <Input
                  id="res-name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Aarav Sharma"
                  className="h-11 rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="res-phone">Phone number</Label>
                <Input
                  id="res-phone"
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  className="h-11 rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="res-date" className="flex items-center gap-2">
                  <CalendarDays className="size-3.5 text-primary" /> Date
                </Label>
                <Input id="res-date" type="date" required className="h-11 rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Clock className="size-3.5 text-primary" /> Time
                </Label>
                <Select defaultValue="8:00 PM">
                  <SelectTrigger className="h-11 rounded-xl">
                    <SelectValue placeholder="Pick a time" />
                  </SelectTrigger>
                  <SelectContent>
                    {TIMES.map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Users className="size-3.5 text-primary" /> Guests
                </Label>
                <Select defaultValue="2">
                  <SelectTrigger className="h-11 rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {["1", "2", "3", "4", "5", "6", "8", "10", "12+"].map((g) => (
                      <SelectItem key={g} value={g}>
                        {g} {g === "1" ? "guest" : "guests"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <PartyPopper className="size-3.5 text-primary" /> Occasion
                </Label>
                <Select defaultValue="none">
                  <SelectTrigger className="h-11 rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Just dinner</SelectItem>
                    <SelectItem value="birthday">Birthday</SelectItem>
                    <SelectItem value="anniversary">Anniversary</SelectItem>
                    <SelectItem value="corporate">Corporate</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="res-notes">Special requests</Label>
                <Textarea
                  id="res-notes"
                  rows={3}
                  placeholder="Window table, cake at 10 PM, no nuts…"
                  className="rounded-xl"
                />
              </div>
              <Button type="submit" variant="luxe" size="lg" className="sm:col-span-2">
                Confirm reservation
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
