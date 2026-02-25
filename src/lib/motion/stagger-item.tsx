"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right";

interface StaggerItemProps {
    children: ReactNode;
    className?: string;
    duration?: number;
    distance?: number;
    direction?: Direction;
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
    duration: number
): Variants => {
    const offset = getOffset(direction, distance);
    return {
        hidden: { opacity: 0, ...offset },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { ease: "easeOut", duration },
        },
    };
};

export default function StaggerItem({
    children,
    className,
    duration = 0.5,
    distance = 20,
    direction = "up",
}: StaggerItemProps) {
    return (
        <motion.div
            className={className}
            variants={createVariants(direction, distance, duration)}
        >
            {children}
        </motion.div>
    );
}
