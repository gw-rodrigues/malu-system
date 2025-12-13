import { createClient } from '@/lib/supabase/client'
import { User, Role, Permission, Preference, Integration, AuditLog } from './types'

const supabase = createClient()

export async function getUsers(): Promise<User[]> {
    const { data, error } = await supabase.from('users').select('*')
    if (error) throw error
    return data as User[]
}

export async function getRoles(): Promise<Role[]> {
    const { data, error } = await supabase.from('roles').select('*')
    if (error) throw error
    return data as Role[]
}

export async function getPermissions(): Promise<Permission[]> {
    const { data, error } = await supabase.from('permissions').select('*')
    if (error) throw error
    return data as Permission[]
}

export async function getPreferences(): Promise<Preference> {
    const { data, error } = await supabase.from('preferences').select('*').single()
    if (error) throw error
    return data as Preference
}

export async function getIntegrations(): Promise<Integration[]> {
    const { data, error } = await supabase.from('integrations').select('*')
    if (error) throw error
    return data as Integration[]
}

export async function getAuditLogs(): Promise<AuditLog[]> {
    const { data, error } = await supabase.from('audit_logs').select('*')
    if (error) throw error
    return data as AuditLog[]
}
