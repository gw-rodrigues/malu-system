import { createClient } from '@/lib/supabase/client'
import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '../query-keys'

export function useDocumentation() {
    return useQuery({
        queryKey: queryKeys.settings.support.docs.all,
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('documentation').select('*')
            if (error) throw error
            return data
        }
    })
}

export function useTutorials() {
    return useQuery({
        queryKey: queryKeys.settings.support.tutorials.all,
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('tutorials').select('*')
            if (error) throw error
            return data
        }
    })
}

export function useSystemLogs() {
    return useQuery({
        queryKey: queryKeys.settings.support.logs.all,
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('system_logs').select('*')
            if (error) throw error
            return data
        }
    })
}
