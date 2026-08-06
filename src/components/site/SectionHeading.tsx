import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={cn(
        "reveal max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p className="font-[family-name:var(--font-button)] text-xs font-semibold uppercase tracking-[0.35em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-4 text-4xl font-semibold leading-[1.1] sm:text-5xl">{title}</h2>
      <div
        className={cn("gold-rule mt-6 w-40", align === "center" ? "mx-auto" : undefined)}
        aria-hidden
      />
      {subtitle ? <p className="mt-5 text-base text-muted-foreground">{subtitle}</p> : null}
    </div>
  );
}
