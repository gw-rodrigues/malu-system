import { createClient } from '@/lib/supabase/client'
import { Reseller, ResellerStatement, ResellerStock } from './types'

const supabase = createClient()

export async function getResellers(): Promise<Reseller[]> {
    const { data, error } = await supabase.from('resellers').select('*')
    if (error) throw error
    return data as Reseller[]
}

export async function getResellerStatements(): Promise<ResellerStatement[]> {
    const { data, error } = await supabase.from('reseller_statements').select('*')
    if (error) throw error
    return data as ResellerStatement[]
}

export async function getResellerStock(): Promise<ResellerStock[]> {
    const { data, error } = await supabase.from('reseller_stock').select('*')
    if (error) throw error
    return data as ResellerStock[]
}
