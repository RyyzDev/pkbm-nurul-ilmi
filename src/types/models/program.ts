// ============================================================
// Program Domain Models
// ============================================================

export interface Program {
    id: number;
    name: string;
    slug: string;
    description: string;
    image: string | null;
    is_active: boolean;
    order: number;
    sub_programs?: SubProgram[];
    created_at: string;
    updated_at: string;
}

export interface SubProgram {
    id: number;
    program_id: number;
    name: string;
    slug: string;
    description: string;
    image: string | null;
    is_active: boolean;
    order: number;
    program?: Program;
    created_at: string;
    updated_at: string;
}

/**
 * Form data for creating/updating programs
 */
export interface ProgramFormData {
    name: string;
    description: string;
    image?: File | null;
    is_active: boolean;
    order: number;
}

/**
 * Form data for creating/updating sub-programs
 */
export interface SubProgramFormData {
    program_id: number;
    name: string;
    description: string;
    image?: File | null;
    is_active: boolean;
    order: number;
}
