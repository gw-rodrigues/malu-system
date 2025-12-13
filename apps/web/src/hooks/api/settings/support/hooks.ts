import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '../../query-keys'
import { getDocumentation, getTutorials, getSystemLogs } from './services'

export function useDocumentation() {
    return useQuery({
        queryKey: queryKeys.settings.support.docs.all,
        queryFn: getDocumentation,
    })
}

export function useTutorials() {
    return useQuery({
        queryKey: queryKeys.settings.support.tutorials.all,
        queryFn: getTutorials,
    })
}

export function useSystemLogs() {
    return useQuery({
        queryKey: queryKeys.settings.support.logs.all,
        queryFn: getSystemLogs,
    })
}
