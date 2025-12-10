import { createClient } from '@/lib/supabase/client'
import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '../query-keys'

export function useUsers() {
    return useQuery({
        queryKey: queryKeys.settings.users.all,
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('users').select('*') // Might need auth admin API depending on setup
            if (error) throw error
            return data
        }
    })
}

export function useRoles() {
    return useQuery({
        queryKey: queryKeys.settings.roles.all,
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('roles').select('*')
            if (error) throw error
            return data
        }
    })
}

export function usePermissions() {
    return useQuery({
        queryKey: queryKeys.settings.permissions.all,
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('permissions').select('*')
            if (error) throw error
            return data
        }
    })
}

export function usePreferences() {
    return useQuery({
        queryKey: queryKeys.settings.preferences.all,
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('preferences').select('*').single()
            if (error) throw error
            return data
        }
    })
}

export function useIntegrations() {
    return useQuery({
        queryKey: queryKeys.settings.integrations.all,
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('integrations').select('*')
            if (error) throw error
            return data
        }
    })
}

export function useAuditLogs() {
    return useQuery({
        queryKey: queryKeys.settings.audit.all,
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('audit_logs').select('*')
            if (error) throw error
            return data
        }
    })
}
