import { createClient } from '@/lib/supabase/client'
import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '../query-keys'

export function useProductionBatches() {
    return useQuery({
        queryKey: queryKeys.logistics.production.batches.all,
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('production_batches').select('*')
            if (error) throw error
            return data
        }
    })
}

export function useProductionInbound() {
    return useQuery({
        queryKey: queryKeys.logistics.production.inbound.all,
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('production_inbound').select('*')
            if (error) throw error
            return data
        }
    })
}

export function useProductionOutbound() {
    return useQuery({
        queryKey: queryKeys.logistics.production.outbound.all,
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('production_outbound').select('*')
            if (error) throw error
            return data
        }
    })
}
