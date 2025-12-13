import { createClient } from '@/lib/supabase/client'
import { Delivery } from './types'

const supabase = createClient()

export async function getDeliveries(status?: string): Promise<Delivery[]> {
    let query = supabase.from('deliveries').select('*')

    if (status) {
        query = query.eq('status', status)
    }

    const { data, error } = await query
    if (error) throw error
    return data as Delivery[]
}
