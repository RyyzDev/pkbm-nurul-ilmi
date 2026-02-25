"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInUpProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    y?: number;
    once?: boolean;
    as?: keyof typeof motion;
}

const createVariants = (y: number, duration: number, delay: number): Variants => ({
    hidden: { opacity: 0, y },
    visible: {
        opacity: 1,
        y: 0,
        transition: { ease: "easeOut", duration, delay },
    },
});

export default function FadeInUp({
    children,
    className,
    delay = 0,
    duration = 0.6,
    y = 30,
    once = true,
    as = "div",
}: FadeInUpProps) {
    const Component = motion[as] as typeof motion.div;

    return (
        <Component
            className={className}
            variants={createVariants(y, duration, delay)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount: 0.15 }}
        >
            {children}
        </Component>
    );
}
