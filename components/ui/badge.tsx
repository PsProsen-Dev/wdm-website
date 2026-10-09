import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase",
  {
    variants: {
      variant: {
        default: "border-brand-saffron/30 bg-brand-saffron/10 text-brand-saffron-deep",
        dark: "border-white/20 bg-white/10 text-white",
        navy: "border-brand-navy/15 bg-brand-navy/5 text-brand-navy",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
