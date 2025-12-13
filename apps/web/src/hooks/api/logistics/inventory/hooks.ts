import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '../../query-keys'
import {
    getInventory,
    getInventoryReservations,
    getWarehouses,
    getStockMovements
} from './services'

export function useInventory() {
    return useQuery({
        queryKey: queryKeys.logistics.inventory.all,
        queryFn: getInventory,
    })
}

export function useInventoryReservations() {
    return useQuery({
        queryKey: queryKeys.logistics.inventory.reservations.list(''),
        queryFn: getInventoryReservations,
    })
}

export function useWarehouses() {
    return useQuery({
        queryKey: queryKeys.logistics.inventory.warehouses.lists(),
        queryFn: getWarehouses,
    })
}

export function useStockMovements() {
    return useQuery({
        queryKey: queryKeys.logistics.inventory.movements.lists(),
        queryFn: getStockMovements,
    })
}
