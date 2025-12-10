import { createClient } from '@/lib/supabase/client'
import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '../query-keys'

export function useDrivers() {
    return useQuery({
        queryKey: queryKeys.commercial.fleet.drivers.list(''),
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('drivers').select('*')
            if (error) throw error
            return data
        }
    })
}

export function useVehicles() {
    return useQuery({
        queryKey: queryKeys.commercial.fleet.vehicles.list(''),
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('vehicles').select('*')
            if (error) throw error
            return data
        }
    })
}

export function useRoutes() {
    return useQuery({
        queryKey: queryKeys.commercial.fleet.routes.list(''),
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('routes').select('*')
            if (error) throw error
            return data
        }
    })
}

export function useFleetExpenses() {
    return useQuery({
        queryKey: queryKeys.commercial.fleet.expenses.list(''),
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('fleet_expenses').select('*')
            if (error) throw error
            return data
        }
    })
}
