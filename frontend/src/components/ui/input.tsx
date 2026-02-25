// ============================================================
// Input — Brand-compliant form input component
// ============================================================

"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    hint?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, error, hint, id, type = "text", ...props }, ref) => {
        return (
            <div className="w-full">
                {label && (
                    <label
                        htmlFor={id}
                        className="mb-1 block text-sm font-medium text-gray-700"
                    >
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    id={id}
                    type={type}
                    className={cn(
                        "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400",
                        "transition-colors",
                        "focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500",
                        "disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500",
                        error && "border-red-500 focus:border-red-500 focus:ring-red-500",
                        className
                    )}
                    aria-invalid={error ? "true" : undefined}
                    aria-describedby={
                        error ? `${id}-error` : hint ? `${id}-hint` : undefined
                    }
                    {...props}
                />
                {error && (
                    <p id={`${id}-error`} className="mt-1 text-xs text-red-500" role="alert">
                        {error}
                    </p>
                )}
                {hint && !error && (
                    <p id={`${id}-hint`} className="mt-1 text-xs text-gray-500">
                        {hint}
                    </p>
                )}
            </div>
        );
    }
);

Input.displayName = "Input";

export { Input };
