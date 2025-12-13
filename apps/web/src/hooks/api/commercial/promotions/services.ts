import { createClient } from '@/lib/supabase/client'
import { Campaign, Coupon } from './types'

const supabase = createClient()

export async function getCampaigns(): Promise<Campaign[]> {
    const { data, error } = await supabase.from('campaigns').select('*')
    if (error) throw error
    return data as Campaign[]
}

export async function getCoupons(): Promise<Coupon[]> {
    const { data, error } = await supabase.from('coupons').select('*')
    if (error) throw error
    return data as Coupon[]
}
