import { createClient } from '@/lib/supabase/client'
import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '../query-keys'

// --- Campaigns ---
export function useCampaigns() {
    return useQuery({
        queryKey: queryKeys.commercial.promotions.campaigns.list(''),
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('campaigns').select('*')
            if (error) throw error
            return data
        }
    })
}

// --- Coupons ---
export function useCoupons() {
    return useQuery({
        queryKey: queryKeys.commercial.promotions.coupons.list(''),
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('coupons').select('*')
            if (error) throw error
            return data
        }
    })
}
