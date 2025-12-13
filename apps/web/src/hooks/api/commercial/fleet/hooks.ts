import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '../../query-keys'
import { getDrivers, getVehicles, getRoutes, getFleetExpenses } from './services'

export function useDrivers() {
    return useQuery({
        queryKey: queryKeys.commercial.fleet.drivers.list(''),
        queryFn: getDrivers,
    })
}

export function useVehicles() {
    return useQuery({
        queryKey: queryKeys.commercial.fleet.vehicles.list(''),
        queryFn: getVehicles,
    })
}

export function useRoutes() {
    return useQuery({
        queryKey: queryKeys.commercial.fleet.routes.list(''),
        queryFn: getRoutes,
    })
}

export function useFleetExpenses() {
    return useQuery({
        queryKey: queryKeys.commercial.fleet.expenses.list(''),
        queryFn: getFleetExpenses,
    })
}
