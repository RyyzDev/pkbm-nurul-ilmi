// ============================================================
// Settings Queries — React Query hooks for site settings
// ============================================================

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "./keys";
import { settingsService } from "@/services/settings.service";
import type { SiteSettingsFormData } from "@/types/models";

export function useSettings() {
    return useQuery({
        queryKey: queryKeys.settings.get(),
        queryFn: () => settingsService.get(),
    });
}

export function useUpdateSettings() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (payload: SiteSettingsFormData) => settingsService.update(payload),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.settings.all });
        },
    });
}
