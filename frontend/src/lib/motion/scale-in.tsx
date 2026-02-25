"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface ScaleInProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    scale?: number;
    once?: boolean;
}

const createVariants = (
    scale: number,
    duration: number,
    delay: number
): Variants => ({
    hidden: { opacity: 0, scale },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { ease: "easeOut", duration, delay },
    },
});

export default function ScaleIn({
    children,
    className,
    delay = 0,
    duration = 0.5,
    scale = 0.9,
    once = true,
}: ScaleInProps) {
    return (
        <motion.div
            className={className}
            variants={createVariants(scale, duration, delay)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount: 0.2 }}
        >
            {children}
        </motion.div>
    );
}
