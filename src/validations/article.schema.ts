// ============================================================
// Article Validation Schemas (Zod)
// ============================================================

import { z } from "zod";

export const articleSchema = z.object({
    title: z
        .string()
        .min(5, "Judul minimal 5 karakter")
        .max(200, "Judul maksimal 200 karakter"),
    excerpt: z
        .string()
        .min(10, "Ringkasan minimal 10 karakter")
        .max(300, "Ringkasan maksimal 300 karakter"),
    content: z
        .string()
        .min(50, "Konten minimal 50 karakter"),
    thumbnail: z
        .instanceof(File)
        .optional()
        .nullable(),
    category_id: z.number().int().positive("Pilih kategori"),
    is_published: z.boolean(),
});

export type ArticleFormValues = z.infer<typeof articleSchema>;

export const articleCategorySchema = z.object({
    name: z
        .string()
        .min(2, "Nama kategori minimal 2 karakter")
        .max(50, "Nama kategori maksimal 50 karakter"),
    description: z.string().nullable(),
});

export type ArticleCategoryFormValues = z.infer<typeof articleCategorySchema>;
