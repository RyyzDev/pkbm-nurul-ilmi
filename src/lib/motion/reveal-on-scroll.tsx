"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right";

interface RevealOnScrollProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    distance?: number;
    direction?: Direction;
    once?: boolean;
    amount?: number;
}

const getOffset = (direction: Direction, distance: number) => {
    switch (direction) {
        case "up":
            return { x: 0, y: distance };
        case "down":
            return { x: 0, y: -distance };
        case "left":
            return { x: distance, y: 0 };
        case "right":
            return { x: -distance, y: 0 };
    }
};

const createVariants = (
    direction: Direction,
    distance: number,
    duration: number,
    delay: number
): Variants => {
    const offset = getOffset(direction, distance);
    return {
        hidden: { opacity: 0, ...offset },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { ease: "easeOut", duration, delay },
        },
    };
};

export default function RevealOnScroll({
    children,
    className,
    delay = 0,
    duration = 0.7,
    distance = 40,
    direction = "up",
    once = true,
    amount = 0.2,
}: RevealOnScrollProps) {
    return (
        <motion.div
            className={className}
            variants={createVariants(direction, distance, duration, delay)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount }}
        >
            {children}
        </motion.div>
    );
}
