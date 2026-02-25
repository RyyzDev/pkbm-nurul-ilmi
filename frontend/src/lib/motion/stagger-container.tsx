"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface StaggerContainerProps {
    children: ReactNode;
    className?: string;
    stagger?: number;
    once?: boolean;
    amount?: number;
    delayChildren?: number;
}

const createVariants = (stagger: number, delayChildren: number): Variants => ({
    hidden: {},
    visible: {
        transition: {
            staggerChildren: stagger,
            delayChildren,
        },
    },
});

export default function StaggerContainer({
    children,
    className,
    stagger = 0.15,
    once = true,
    amount = 0.2,
    delayChildren = 0,
}: StaggerContainerProps) {
    return (
        <motion.div
            className={className}
            variants={createVariants(stagger, delayChildren)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount }}
        >
            {children}
        </motion.div>
    );
}
