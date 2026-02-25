// ============================================================
// Program Validation Schemas (Zod)
// ============================================================

import { z } from "zod";

export const programSchema = z.object({
    name: z
        .string()
        .min(3, "Nama program minimal 3 karakter")
        .max(100, "Nama program maksimal 100 karakter"),
    description: z
        .string()
        .min(10, "Deskripsi minimal 10 karakter"),
    image: z
        .instanceof(File)
        .optional()
        .nullable(),
    is_active: z.boolean(),
    order: z.number().int().min(0),
});

export type ProgramFormValues = z.infer<typeof programSchema>;

export const subProgramSchema = z.object({
    program_id: z.number().int().positive("Pilih program induk"),
    name: z
        .string()
        .min(3, "Nama sub program minimal 3 karakter")
        .max(100, "Nama sub program maksimal 100 karakter"),
    description: z
        .string()
        .min(10, "Deskripsi minimal 10 karakter"),
    image: z
        .instanceof(File)
        .optional()
        .nullable(),
    is_active: z.boolean(),
    order: z.number().int().min(0),
});

export type SubProgramFormValues = z.infer<typeof subProgramSchema>;
