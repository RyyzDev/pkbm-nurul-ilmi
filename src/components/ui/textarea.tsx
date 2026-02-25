// ============================================================
// Textarea — Brand-compliant textarea component
// ============================================================

"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    hint?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, label, error, hint, id, ...props }, ref) => {
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
                <textarea
                    ref={ref}
                    id={id}
                    className={cn(
                        "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400",
                        "transition-colors resize-y min-h-[80px]",
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

Textarea.displayName = "Textarea";

export { Textarea };
