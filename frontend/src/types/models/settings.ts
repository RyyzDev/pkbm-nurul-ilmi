// ============================================================
// Site Settings Domain Models
// ============================================================

export interface SiteSettings {
    id: number;
    site_name: string;
    site_description: string;
    address: string;
    phone: string;
    email: string;
    whatsapp: string | null;
    instagram: string | null;
    facebook: string | null;
    youtube: string | null;
    google_maps_embed: string | null;
    logo: string | null;
    favicon: string | null;
    updated_at: string;
}

/**
 * Form data for updating site settings
 */
export interface SiteSettingsFormData {
    site_name: string;
    site_description: string;
    address: string;
    phone: string;
    email: string;
    whatsapp?: string;
    instagram?: string;
    facebook?: string;
    youtube?: string;
    google_maps_embed?: string;
    logo?: File | null;
    favicon?: File | null;
}
