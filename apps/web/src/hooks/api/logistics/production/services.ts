import { createClient } from '@/lib/supabase/client'
import { ProductionBatch, ProductionInbound, ProductionOutbound } from './types'

const supabase = createClient()

export async function getProductionBatches(): Promise<ProductionBatch[]> {
    const { data, error } = await supabase.from('production_batches').select('*')
    if (error) throw error
    return data as ProductionBatch[]
}

export async function getProductionInbound(): Promise<ProductionInbound[]> {
    const { data, error } = await supabase.from('production_inbound').select('*')
    if (error) throw error
    return data as ProductionInbound[]
}

export async function getProductionOutbound(): Promise<ProductionOutbound[]> {
    const { data, error } = await supabase.from('production_outbound').select('*')
    if (error) throw error
    return data as ProductionOutbound[]
}
