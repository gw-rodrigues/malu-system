import { createClient } from '@/lib/supabase/client'
import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '../query-keys'

export function usePriceList() {
    return useQuery({
        queryKey: queryKeys.finance.pricelist.all,
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('price_list').select('*')
            if (error) throw error
            return data
        }
    })
}

export function useReceivables() {
    return useQuery({
        queryKey: queryKeys.finance.receivables.all,
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('receivables').select('*')
            if (error) throw error
            return data
        }
    })
}

export function usePayables() {
    return useQuery({
        queryKey: queryKeys.finance.payables.all,
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('payables').select('*')
            if (error) throw error
            return data
        }
    })
}

export function useResellerPayouts() {
    return useQuery({
        queryKey: queryKeys.finance.resellerPayouts.all,
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('reseller_payouts').select('*')
            if (error) throw error
            return data
        }
    })
}

export function useFleetCash() {
    return useQuery({
        queryKey: queryKeys.finance.fleetCash.all,
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('fleet_cash').select('*')
            if (error) throw error
            return data
        }
    })
}
