import { createClient } from '@/lib/supabase/client'
import { InventoryItem, InventoryReservation, Warehouse, StockMovement } from './types'
import { InventoryItem as InventoryItemData } from '@/types/data-inventory'

const supabase = createClient()

export async function getInventory(): Promise<InventoryItemData[]> {
    const { data, error } = await supabase
        .from('inventory_item')
        .select(`
            id,
            sku,
            title,
            thumbnail,
            updated_at,
            inventory_level (
                stocked_quantity,
                reserved_quantity
            )
        `);

    if (error) throw error;

    // Map the nested structure to the flat structure
    // aggregations typically needed if multiple levels per item, but simple mapping for now assuming singleton or we want sum
    return (data as any[]).map((item) => {
        const levels = item.inventory_level as { stocked_quantity: number, reserved_quantity: number }[] || [];
        const in_stock = levels.reduce((acc, curr) => acc + Number(curr.stocked_quantity), 0);
        const reserved = levels.reduce((acc, curr) => acc + Number(curr.reserved_quantity), 0);

        return {
            id: item.id,
            sku: item.sku,
            title: item.title,
            photo_url: item.thumbnail,
            in_stock,
            reserved,
            updated_at: item.updated_at
        };
    });
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
