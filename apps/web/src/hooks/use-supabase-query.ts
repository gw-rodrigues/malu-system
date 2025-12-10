import { createClient } from '@/lib/supabase/client'
import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query'

// Example: Fetch user profile
export function useUserProfile(userId: string, options?: Omit<UseQueryOptions<any, Error, any>, 'queryKey'>) {
    return useQuery({
        queryKey: ['user', userId],
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', userId)
                .single()

            if (error) throw error
            return data
        },
        enabled: !!userId,
        ...options,
    })
}

// Example: Generic query builder hook inspiration
// Real implementations usually wrap specific tables
export function useSupabaseQuery(
    key: string[],
    queryFn: () => Promise<any>,
    options?: any
) {
    return useQuery({
        queryKey: key,
        queryFn,
        ...options,
    })
}
