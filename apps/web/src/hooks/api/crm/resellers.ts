import { createClient } from '@/lib/supabase/client'
import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '../query-keys'

export function useResellers() {
    return useQuery({
        queryKey: queryKeys.crm.resellers.all,
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('resellers').select('*')
            if (error) throw error
            return data
        }
    })
}

export function useResellerStatements() {
    return useQuery({
        queryKey: queryKeys.crm.resellers.statements.all,
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('reseller_statements').select('*')
            if (error) throw error
            return data
        }
    })
}

export function useResellerStock() {
    return useQuery({
        queryKey: queryKeys.crm.resellers.stock.all,
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('reseller_stock').select('*')
            if (error) throw error
            return data
        }
    })
}
