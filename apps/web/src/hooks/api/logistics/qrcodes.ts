import { createClient } from '@/lib/supabase/client'
import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '../query-keys'

export function useQrcodesProducts() {
    return useQuery({
        queryKey: queryKeys.logistics.qrcodes.products.all,
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('qrcodes_products').select('*')
            if (error) throw error
            return data
        }
    })
}

export function useQrcodesBatches() {
    return useQuery({
        queryKey: queryKeys.logistics.qrcodes.batches.all,
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('qrcodes_batches').select('*')
            if (error) throw error
            return data
        }
    })
}

export function useQrcodesDeliveries() {
    return useQuery({
        queryKey: queryKeys.logistics.qrcodes.deliveries.all,
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('qrcodes_deliveries').select('*')
            if (error) throw error
            return data
        }
    })
}
