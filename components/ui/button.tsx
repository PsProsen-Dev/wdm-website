import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-saffron focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-brand-saffron text-brand-navy-deep shadow-lg shadow-brand-saffron/25 hover:bg-brand-saffron-deep hover:shadow-brand-saffron/40 hover:-translate-y-0.5",
        secondary:
          "bg-brand-navy text-white shadow-lg shadow-brand-navy/25 hover:bg-brand-navy-deep hover:-translate-y-0.5",
        outline:
          "border-2 border-brand-saffron/60 bg-transparent text-brand-navy hover:border-brand-saffron hover:bg-brand-saffron/10",
        outlineLight:
          "border-2 border-white/30 bg-white/5 text-white backdrop-blur hover:border-white/60 hover:bg-white/10",
        ghost: "text-brand-navy hover:bg-brand-navy/5",
        whatsapp:
          "bg-[#25d366] text-white shadow-lg shadow-[#25d366]/30 hover:bg-[#1fb857] hover:-translate-y-0.5",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-8 py-4 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
