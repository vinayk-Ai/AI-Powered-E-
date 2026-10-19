import { cva, type VariantProps } from "class-variance-authority";
import { Cable, Smartphone, Square, Zap, Headphones, BatteryCharging } from "lucide-react";
import type { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import type { BillStatus, ProductKind } from "@/lib/api";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md font-medium whitespace-nowrap transition-colors duration-150 ease-out focus-ring disabled:opacity-50 disabled:pointer-events-none [&_svg]:size-4 [&_svg]:stroke-[1.5]",
  {
    variants: {
      variant: {
        accent: "bg-accent text-accent-foreground hover:bg-accent/85",
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "hairline bg-card text-foreground hover:bg-muted",
        ghost: "text-foreground hover:bg-muted",
        quiet: "text-primary hover:bg-primary-soft",
      },
      size: { sm: "h-8 px-3 text-xs", md: "h-10 px-4 text-sm", lg: "h-12 px-5 text-base", icon: "size-9" },
    },
    defaultVariants: { variant: "outline", size: "md" },
  },
);
export function Button({ className, variant, size, ...p }: ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...p} />;
}

export function Card({ className, ...p }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-lg hairline bg-card", className)} {...p} />;
}

const badge = cva("inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium", {
  variants: {
    tone: {
      success: "bg-success-soft text-success",
      warning: "bg-warning-soft text-warning",
      danger: "bg-destructive-soft text-destructive",
      primary: "bg-primary-soft text-primary",
      neutral: "bg-muted text-muted-foreground",
    },
  },
  defaultVariants: { tone: "neutral" },
});
export function Badge({ tone, className, ...p }: HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badge>) {
  return <span className={cn(badge({ tone }), className)} {...p} />;
}
export function StatusBadge({ status }: { status: BillStatus }) {
  const tone = status === "Paid" ? "success" : status === "Partial" ? "warning" : "danger";
  return <Badge tone={tone}><span className="size-1.5 rounded-full bg-current" />{status}</Badge>;
}

const icons = { cable: Cable, cover: Smartphone, glass: Square, charger: Zap, audio: Headphones, power: BatteryCharging };
export function ProductThumb({ kind, className }: { kind: ProductKind; className?: string }) {
  const I = icons[kind];
  return <div className={cn("grid size-10 shrink-0 place-items-center rounded-md bg-primary-soft text-primary", className)}><I className="size-[18px] stroke-[1.5]" /></div>;
}

export function Segmented<T extends string>({ value, options, onChange, label }: { value: T; options: { v: T; l: string }[]; onChange: (v: T) => void; label: string }) {
  return (
    <div role="radiogroup" aria-label={label} className="grid rounded-md bg-muted p-1" style={{ gridTemplateColumns: `repeat(${options.length},1fr)` }}>
      {options.map((o) => (
        <button key={o.v} role="radio" aria-checked={value === o.v} onClick={() => onChange(o.v)}
          className={cn("h-8 rounded-[7px] text-sm font-medium transition-colors duration-150 focus-ring",
            value === o.v ? "bg-card text-foreground hairline" : "text-muted-foreground hover:text-foreground")}>
          {o.l}
        </button>
      ))}
    </div>
  );
}
