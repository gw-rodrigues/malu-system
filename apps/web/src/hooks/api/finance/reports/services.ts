import { createClient } from '@/lib/supabase/client'
import { SalesReport, InventoryReport, ProductionReport, DeliveriesReport } from './types'

const supabase = createClient()

export async function getSalesReport(): Promise<SalesReport[]> {
    const { data, error } = await supabase.from('reports_sales').select('*')
    if (error) throw error
    return data as SalesReport[]
}

export async function getInventoryReport(): Promise<InventoryReport[]> {
    const { data, error } = await supabase.from('reports_inventory').select('*')
    if (error) throw error
    return data as InventoryReport[]
}

export async function getProductionReport(): Promise<ProductionReport[]> {
    const { data, error } = await supabase.from('reports_production').select('*')
    if (error) throw error
    return data as ProductionReport[]
}

export async function getDeliveriesReport(): Promise<DeliveriesReport[]> {
    const { data, error } = await supabase.from('reports_deliveries').select('*')
    if (error) throw error
    return data as DeliveriesReport[]
}
