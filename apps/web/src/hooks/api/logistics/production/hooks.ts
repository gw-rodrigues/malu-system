import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '../../query-keys'
import { getProductionBatches, getProductionInbound, getProductionOutbound } from './services'

export function useProductionBatches() {
    return useQuery({
        queryKey: queryKeys.logistics.production.batches.all,
        queryFn: getProductionBatches,
    })
}

export function useProductionInbound() {
    return useQuery({
        queryKey: queryKeys.logistics.production.inbound.all,
        queryFn: getProductionInbound,
    })
}

export function useProductionOutbound() {
    return useQuery({
        queryKey: queryKeys.logistics.production.outbound.all,
        queryFn: getProductionOutbound,
    })
}
