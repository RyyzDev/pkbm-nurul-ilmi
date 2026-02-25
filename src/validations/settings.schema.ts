// ============================================================
// Settings Validation Schema (Zod)
// ============================================================

import { z } from "zod";

export const settingsSchema = z.object({
    site_name: z
        .string()
        .min(2, "Nama situs minimal 2 karakter"),
    site_description: z
        .string()
        .min(10, "Deskripsi situs minimal 10 karakter"),
    address: z
        .string()
        .min(10, "Alamat minimal 10 karakter"),
    phone: z
        .string()
        .min(10, "Nomor telepon minimal 10 digit"),
    email: z
        .string()
        .email("Format email tidak valid"),
    whatsapp: z.string().optional().or(z.literal("")),
    instagram: z.string().optional().or(z.literal("")),
    facebook: z.string().optional().or(z.literal("")),
    youtube: z.string().optional().or(z.literal("")),
    google_maps_embed: z.string().optional().or(z.literal("")),
    logo: z.instanceof(File).optional().nullable(),
    favicon: z.instanceof(File).optional().nullable(),
});

export type SettingsFormValues = z.infer<typeof settingsSchema>;
