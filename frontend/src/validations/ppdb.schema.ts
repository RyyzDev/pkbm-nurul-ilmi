// ============================================================
// PPDB Validation Schema (Zod)
// ============================================================

import { z } from "zod";

export const ppdbSchema = z.object({
    full_name: z
        .string()
        .min(3, "Nama lengkap minimal 3 karakter")
        .max(100, "Nama lengkap maksimal 100 karakter"),
    birth_place: z
        .string()
        .min(2, "Tempat lahir minimal 2 karakter"),
    birth_date: z
        .string()
        .regex(/^\d{4}-\d{2}-\d{2}$/, "Format tanggal tidak valid (YYYY-MM-DD)"),
    gender: z.enum(["L", "P"], {
        message: "Pilih jenis kelamin",
    }),
    address: z
        .string()
        .min(10, "Alamat minimal 10 karakter"),
    phone: z
        .string()
        .min(10, "Nomor telepon minimal 10 digit")
        .max(15, "Nomor telepon maksimal 15 digit")
        .regex(/^[0-9+\-\s]+$/, "Format nomor telepon tidak valid"),
    email: z
        .string()
        .email("Format email tidak valid")
        .optional()
        .or(z.literal("")),
    parent_name: z
        .string()
        .min(3, "Nama orang tua minimal 3 karakter"),
    parent_phone: z
        .string()
        .min(10, "Nomor telepon orang tua minimal 10 digit")
        .max(15, "Nomor telepon orang tua maksimal 15 digit"),
    previous_school: z.string().optional().or(z.literal("")),
    program_id: z.number().int().positive("Pilih program yang diminati"),
});

export type PPDBFormValues = z.infer<typeof ppdbSchema>;
