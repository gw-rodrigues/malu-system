import { createClient } from '@/lib/supabase/client'
import { QrcodeProduct, QrcodeBatch, QrcodeDelivery } from './types'

const supabase = createClient()

export async function getQrcodesProducts(): Promise<QrcodeProduct[]> {
    const { data, error } = await supabase.from('qrcodes_products').select('*')
    if (error) throw error
    return data as QrcodeProduct[]
}

export async function getQrcodesBatches(): Promise<QrcodeBatch[]> {
    const { data, error } = await supabase.from('qrcodes_batches').select('*')
    if (error) throw error
    return data as QrcodeBatch[]
}

export async function getQrcodesDeliveries(): Promise<QrcodeDelivery[]> {
    const { data, error } = await supabase.from('qrcodes_deliveries').select('*')
    if (error) throw error
    return data as QrcodeDelivery[]
}
