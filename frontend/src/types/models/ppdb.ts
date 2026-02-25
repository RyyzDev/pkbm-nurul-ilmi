// ============================================================
// PPDB (Penerimaan Peserta Didik Baru) Domain Models
// ============================================================

export interface PPDBSubmission {
    id: number;
    full_name: string;
    birth_place: string;
    birth_date: string;
    gender: "L" | "P";
    address: string;
    phone: string;
    email: string | null;
    parent_name: string;
    parent_phone: string;
    previous_school: string | null;
    program_id: number;
    program?: import("./program").Program;
    status: PPDBStatus;
    notes: string | null;
    created_at: string;
    updated_at: string;
}

export type PPDBStatus = "pending" | "reviewed" | "accepted" | "rejected";

/**
 * Form data for public PPDB registration
 */
export interface PPDBFormData {
    full_name: string;
    birth_place: string;
    birth_date: string;
    gender: "L" | "P";
    address: string;
    phone: string;
    email?: string;
    parent_name: string;
    parent_phone: string;
    previous_school?: string;
    program_id: number;
}

/**
 * Query params specific to PPDB submissions listing
 */
export interface PPDBQueryParams {
    page?: number;
    per_page?: number;
    search?: string;
    status?: PPDBStatus;
    program_id?: number;
}
