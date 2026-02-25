"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import type { SizeVariant } from "@/types/common";

// ── Variant styles ─────────────────────────────────────────
const variantStyles = {
  primary:
    "bg-green-700 text-white shadow-md hover:bg-green-800 hover:shadow-lg",
  secondary: "bg-white border border-gray-300 text-primary hover:bg-green-50 shadow-md hover:shadow-lg",
  accent:
    "text-primary bg-[var(--color-accent-gold)] hover:shadow-lg shadow-md",
  ghost:
    "text-gray-600 bg-transparent hover:bg-gray-100 hover:text-gray-900",
  destructive:
    "text-gray-500 bg-transparent hover:bg-red-50 hover:text-red-600",
} as const;

// ── Rounded styles ─────────────────────────────────────────
type RoundedVariant = SizeVariant | "xl";

const roundedStyles: Record<RoundedVariant, string> = {
  sm: "rounded-md",
  md: "rounded-lg",
  lg: "rounded-xl",
  xl: "rounded-full",
};

// ── Size styles ────────────────────────────────────────────
const sizeStyles: Record<SizeVariant, string> = {
  sm: "px-3 py-1.5 text-xs gap-1.5",
  md: "px-4 py-2.5 text-sm gap-2",
  lg: "px-6 py-3 text-sm gap-2",
};

// ── Icon size per button size ──────────────────────────────
const iconSizeStyles: Record<SizeVariant, string> = {
  sm: "[&>svg]:h-3.5 [&>svg]:w-3.5",
  md: "[&>svg]:h-4 [&>svg]:w-4",
  lg: "[&>svg]:h-5 [&>svg]:w-5",
};

export type ButtonVariant = keyof typeof variantStyles;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: SizeVariant;
  rounded?: RoundedVariant;
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      rounded = "md",
      fullWidth = false,
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      type = "button",
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        className={cn(
          // Base
          "inline-flex items-center justify-center font-semibold transition-all",
          // Focus
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700",
          // Disabled
          "disabled:cursor-not-allowed disabled:opacity-50",
          // Variant
          variantStyles[variant],
          // Size
          sizeStyles[size],
          // Rounded (dynamic)
          roundedStyles[rounded],
          // Icon sizing
          iconSizeStyles[size],
          // Full width
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {isLoading ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            <span>Memproses...</span>
          </>
        ) : (
          <>
            {leftIcon}
            {children}
            {rightIcon}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };