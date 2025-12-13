import { createClient } from '@/lib/supabase/client'
import { Order } from './types'

const supabase = createClient()

export async function getOrders(filters: string = ''): Promise<Order[]> {
    const { data, error } = await supabase.from('orders').select('*')
    if (error) throw error
    return data as Order[]
}

export async function getOrder(id: string): Promise<Order> {
    const { data, error } = await supabase.from('orders').select('*').eq('id', id).single()
    if (error) throw error
    return data as Order
}

export async function createOrderService(newOrder: any): Promise<Order> {
    const { data, error } = await supabase.from('orders').insert(newOrder).select().single()
    if (error) throw error
    return data as Order
}
