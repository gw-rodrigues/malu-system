import { createClient } from '@/lib/supabase/client'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { queryKeys } from '../query-keys'

export function useOrders(filters: string = '') {
    return useQuery({
        queryKey: queryKeys.commercial.orders.list(filters),
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('orders').select('*')
            if (error) throw error
            return data
        },
    })
}

export function useOrder(id: string) {
    return useQuery({
        queryKey: queryKeys.commercial.orders.detail(id),
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('orders').select('*').eq('id', id).single()
            if (error) throw error
            return data
        },
        enabled: !!id,
    })
}

export function useCreateOrder() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async (newOrder: any) => {
            const supabase = createClient()
            const { data, error } = await supabase.from('orders').insert(newOrder).select().single()
            if (error) throw error
            return data
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.commercial.orders.lists() })
        }
    })
}
