// ============================================================
// Select — Brand-compliant select dropdown component
// ============================================================

"use client";

import { forwardRef } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectOption {
    label: string;
    value: string | number;
}

export interface SelectProps
    extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "children"> {
    label?: string;
    error?: string;
    hint?: string;
    placeholder?: string;
    options: SelectOption[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
    (
        { className, label, error, hint, id, placeholder, options, ...props },
        ref
    ) => {
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
                <div className="relative">
                    <select
                        ref={ref}
                        id={id}
                        className={cn(
                            "w-full appearance-none rounded-lg border border-gray-300 bg-white px-3 py-2.5 pr-10 text-sm text-gray-900",
                            "transition-colors",
                            "focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500",
                            "disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500",
                            error &&
                            "border-red-500 focus:border-red-500 focus:ring-red-500",
                            className
                        )}
                        aria-invalid={error ? "true" : undefined}
                        aria-describedby={
                            error
                                ? `${id}-error`
                                : hint
                                    ? `${id}-hint`
                                    : undefined
                        }
                        {...props}
                    >
                        {placeholder && (
                            <option value="" disabled>
                                {placeholder}
                            </option>
                        )}
                        {options.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                    <ChevronDown
                        size={16}
                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                </div>
                {error && (
                    <p
                        id={`${id}-error`}
                        className="mt-1 text-xs text-red-500"
                        role="alert"
                    >
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

Select.displayName = "Select";

export { Select };
