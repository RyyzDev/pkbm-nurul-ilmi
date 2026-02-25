// ============================================================
// Program Queries — React Query hooks for programs
// ============================================================

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "./keys";
import { programService } from "@/services/program.service";
import type { ListQueryParams } from "@/types/api";
import type { ProgramFormData } from "@/types/models";

/**
 * Fetch paginated list of programs
 */
export function usePrograms(params?: ListQueryParams) {
    return useQuery({
        queryKey: queryKeys.programs.list(params ?? {}),
        queryFn: () => programService.list(params),
    });
}

/**
 * Fetch a single program by ID
 */
export function useProgram(id: number) {
    return useQuery({
        queryKey: queryKeys.programs.detail(id),
        queryFn: () => programService.detail(id),
        enabled: !!id,
    });
}

/**
 * Create a new program
 */
export function useCreateProgram() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (payload: ProgramFormData) => programService.create(payload),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.programs.lists() });
        },
    });
}

/**
 * Update an existing program
 */
export function useUpdateProgram() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, payload }: { id: number; payload: ProgramFormData }) =>
            programService.update(id, payload),
        onSuccess: (_data, variables) => {
            queryClient.invalidateQueries({ queryKey: queryKeys.programs.lists() });
            queryClient.invalidateQueries({
                queryKey: queryKeys.programs.detail(variables.id),
            });
        },
    });
}

/**
 * Delete a program
 */
export function useDeleteProgram() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => programService.delete(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.programs.lists() });
        },
    });
}
