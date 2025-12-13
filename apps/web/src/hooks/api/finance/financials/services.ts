import { createClient } from '@/lib/supabase/client'
import { PriceList, Receivable, Payable, ResellerPayout, FleetCash } from './types'

const supabase = createClient()

export async function getPriceList(): Promise<PriceList[]> {
    const { data, error } = await supabase.from('price_list').select('*')
    if (error) throw error
    return data as PriceList[]
}

export async function getReceivables(): Promise<Receivable[]> {
    const { data, error } = await supabase.from('receivables').select('*')
    if (error) throw error
    return data as Receivable[]
}

export async function getPayables(): Promise<Payable[]> {
    const { data, error } = await supabase.from('payables').select('*')
    if (error) throw error
    return data as Payable[]
}

export async function getResellerPayouts(): Promise<ResellerPayout[]> {
    const { data, error } = await supabase.from('reseller_payouts').select('*')
    if (error) throw error
    return data as ResellerPayout[]
}

export async function getFleetCash(): Promise<FleetCash[]> {
    const { data, error } = await supabase.from('fleet_cash').select('*')
    if (error) throw error
    return data as FleetCash[]
}
