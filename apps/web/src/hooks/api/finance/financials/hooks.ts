import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '../../query-keys'
import {
    getPriceList,
    getReceivables,
    getPayables,
    getResellerPayouts,
    getFleetCash
} from './services'

export function usePriceList() {
    return useQuery({
        queryKey: queryKeys.finance.pricelist.all,
        queryFn: getPriceList,
    })
}

export function useReceivables() {
    return useQuery({
        queryKey: queryKeys.finance.receivables.all,
        queryFn: getReceivables,
    })
}

export function usePayables() {
    return useQuery({
        queryKey: queryKeys.finance.payables.all,
        queryFn: getPayables,
    })
}

export function useResellerPayouts() {
    return useQuery({
        queryKey: queryKeys.finance.resellerPayouts.all,
        queryFn: getResellerPayouts,
    })
}

export function useFleetCash() {
    return useQuery({
        queryKey: queryKeys.finance.fleetCash.all,
        queryFn: getFleetCash,
    })
}
