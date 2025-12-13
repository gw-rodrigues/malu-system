import { createClient } from '@/lib/supabase/client'
import { Documentation, Tutorial, SystemLog } from './types'

const supabase = createClient()

export async function getDocumentation(): Promise<Documentation[]> {
    const { data, error } = await supabase.from('documentation').select('*')
    if (error) throw error
    return data as Documentation[]
}

export async function getTutorials(): Promise<Tutorial[]> {
    const { data, error } = await supabase.from('tutorials').select('*')
    if (error) throw error
    return data as Tutorial[]
}

export async function getSystemLogs(): Promise<SystemLog[]> {
    const { data, error } = await supabase.from('system_logs').select('*')
    if (error) throw error
    return data as SystemLog[]
}
