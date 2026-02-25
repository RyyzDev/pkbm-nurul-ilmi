// ============================================================
// PPDB Queries — React Query hooks for PPDB submissions
// ============================================================

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "./keys";
import { ppdbService } from "@/services/ppdb.service";
import type { PPDBFormData, PPDBQueryParams, PPDBStatus } from "@/types/models";

/**
 * Public: Submit a PPDB registration
 */
export function useSubmitPPDB() {
    return useMutation({
        mutationFn: (payload: PPDBFormData) => ppdbService.submit(payload),
    });
}

/**
 * Admin: Fetch paginated list of PPDB submissions
 */
export function usePPDBSubmissions(params?: PPDBQueryParams) {
    return useQuery({
        queryKey: queryKeys.ppdb.list(params ?? {}),
        queryFn: () => ppdbService.list(params),
    });
}

/**
 * Admin: Fetch a single PPDB submission
 */
export function usePPDBSubmission(id: number) {
    return useQuery({
        queryKey: queryKeys.ppdb.detail(id),
        queryFn: () => ppdbService.detail(id),
        enabled: !!id,
    });
}

/**
 * Admin: Update submission status
 */
export function useUpdatePPDBStatus() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({
            id,
            status,
            notes,
        }: {
            id: number;
            status: PPDBStatus;
            notes?: string;
        }) => ppdbService.updateStatus(id, status, notes),
        onSuccess: (_data, variables) => {
            queryClient.invalidateQueries({ queryKey: queryKeys.ppdb.lists() });
            queryClient.invalidateQueries({
                queryKey: queryKeys.ppdb.detail(variables.id),
            });
        },
    });
}
