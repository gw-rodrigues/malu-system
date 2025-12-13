import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '../../query-keys'
import {
    getSalesReport,
    getInventoryReport,
    getProductionReport,
    getDeliveriesReport
} from './services'

export function useSalesReport() {
    return useQuery({
        queryKey: queryKeys.finance.reports.sales.all,
        queryFn: getSalesReport,
    })
}

export function useInventoryReport() {
    return useQuery({
        queryKey: queryKeys.finance.reports.inventory.all,
        queryFn: getInventoryReport,
    })
}

export function useProductionReport() {
    return useQuery({
        queryKey: queryKeys.finance.reports.production.all,
        queryFn: getProductionReport,
    })
}

export function useDeliveriesReport() {
    return useQuery({
        queryKey: queryKeys.finance.reports.deliveries.all,
        queryFn: getDeliveriesReport,
    })
}
