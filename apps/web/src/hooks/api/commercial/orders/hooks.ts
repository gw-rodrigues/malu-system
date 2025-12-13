import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { queryKeys } from '../../query-keys'
import { getOrders, getOrder, createOrderService } from './services'

export function useOrders(filters: string = '') {
    return useQuery({
        queryKey: queryKeys.commercial.orders.list(filters),
        queryFn: () => getOrders(filters),
    })
}

export function useOrder(id: string) {
    return useQuery({
        queryKey: queryKeys.commercial.orders.detail(id),
        queryFn: () => getOrder(id),
        enabled: !!id,
    })
}

export function useCreateOrder() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: createOrderService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.commercial.orders.lists() })
        }
    })
}
