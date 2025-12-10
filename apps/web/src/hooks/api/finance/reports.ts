import { createClient } from '@/lib/supabase/client'
import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '../query-keys'

// Reports often involve complex queries or RPC calls
export function useSalesReport() {
    return useQuery({
        queryKey: queryKeys.finance.reports.sales.all,
        queryFn: async () => {
            const supabase = createClient()
            // Depending on implementation, this could be .rpc('get_sales_report')
            const { data, error } = await supabase.from('reports_sales').select('*')
            if (error) throw error
            return data
        }
    })
}

export function useInventoryReport() {
    return useQuery({
        queryKey: queryKeys.finance.reports.inventory.all,
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('reports_inventory').select('*')
            if (error) throw error
            return data
        }
    })
}

export function useProductionReport() {
    return useQuery({
        queryKey: queryKeys.finance.reports.production.all,
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('reports_production').select('*')
            if (error) throw error
            return data
        }
    })
}

export function useDeliveriesReport() {
    return useQuery({
        queryKey: queryKeys.finance.reports.deliveries.all,
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('reports_deliveries').select('*')
            if (error) throw error
            return data
        }
    })
}
