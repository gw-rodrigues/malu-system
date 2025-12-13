import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '../../query-keys'
import { 
    getUsers, 
    getRoles, 
    getPermissions, 
    getPreferences, 
    getIntegrations, 
    getAuditLogs 
} from './services'

export function useUsers() {
    return useQuery({
        queryKey: queryKeys.settings.users.all,
        queryFn: getUsers,
    })
}

export function useRoles() {
    return useQuery({
        queryKey: queryKeys.settings.roles.all,
        queryFn: getRoles,
    })
}

export function usePermissions() {
    return useQuery({
        queryKey: queryKeys.settings.permissions.all,
        queryFn: getPermissions,
    })
}

export function usePreferences() {
    return useQuery({
        queryKey: queryKeys.settings.preferences.all,
        queryFn: getPreferences,
    })
}

export function useIntegrations() {
    return useQuery({
        queryKey: queryKeys.settings.integrations.all,
        queryFn: getIntegrations,
    })
}

export function useAuditLogs() {
    return useQuery({
        queryKey: queryKeys.settings.audit.all,
        queryFn: getAuditLogs,
    })
}
