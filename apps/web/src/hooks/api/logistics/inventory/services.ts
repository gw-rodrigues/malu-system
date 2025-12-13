import { createClient } from '@/lib/supabase/client'
import { InventoryItem, InventoryReservation, Warehouse, StockMovement } from './types'

const supabase = createClient()

export async function getInventory(): Promise<InventoryItem[]> {
    const { data, error } = await supabase.from('inventory').select('*')
    if (error) throw error
    return data as InventoryItem[]
}

export async function getInventoryReservations(): Promise<InventoryReservation[]> {
    const { data, error } = await supabase.from('inventory_reservations').select('*')
    if (error) throw error
    return data as InventoryReservation[]
}

export async function getWarehouses(): Promise<Warehouse[]> {
    const { data, error } = await supabase.from('warehouses').select('*')
    if (error) throw error
    return data as Warehouse[]
}

export async function getStockMovements(): Promise<StockMovement[]> {
    const { data, error } = await supabase.from('stock_movements').select('*')
    if (error) throw error
    return data as StockMovement[]
}
