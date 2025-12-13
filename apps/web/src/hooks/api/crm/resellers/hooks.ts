import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '../../query-keys'
import { getResellers, getResellerStatements, getResellerStock } from './services'

export function useResellers() {
    return useQuery({
        queryKey: queryKeys.crm.resellers.all,
        queryFn: getResellers,
    })
}

export function useResellerStatements() {
    return useQuery({
        queryKey: queryKeys.crm.resellers.statements.all,
        queryFn: getResellerStatements,
    })
}

export function useResellerStock() {
    return useQuery({
        queryKey: queryKeys.crm.resellers.stock.all,
        queryFn: getResellerStock,
    })
}
