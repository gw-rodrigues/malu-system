import { createClient } from '@/lib/supabase/client'
import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '../query-keys'

// --- Inventory ---
export function useInventory() {
    return useQuery({
        queryKey: queryKeys.logistics.inventory.all,
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('inventory').select('*')
            if (error) throw error
            return data
        }
    })
}

// --- Reservations ---
export function useInventoryReservations() {
    return useQuery({
        queryKey: queryKeys.logistics.inventory.reservations.list(''),
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('inventory_reservations').select('*')
            if (error) throw error
            return data
        }
    })
}

// --- Warehouses ---
export function useWarehouses() {
    return useQuery({
        queryKey: queryKeys.logistics.inventory.warehouses.lists(),
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('warehouses').select('*')
            if (error) throw error
            return data
        }
    })
}

// --- Movements ---
export function useStockMovements() {
    return useQuery({
        queryKey: queryKeys.logistics.inventory.movements.lists(),
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('stock_movements').select('*')
            if (error) throw error
            return data
        }
    })
}
