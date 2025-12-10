import { createClient } from '@/lib/supabase/client'
import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '../query-keys'

export function useDeliveries(status?: string) {
    return useQuery({
        queryKey: queryKeys.commercial.deliveries.list(status || ''),
        queryFn: async () => {
            const supabase = createClient()
            let query = supabase.from('deliveries').select('*')

            if (status) {
                // Assuming there is a status column
                query = query.eq('status', status)
            }

            const { data, error } = await query
            if (error) throw error
            return data
        }
    })
}
