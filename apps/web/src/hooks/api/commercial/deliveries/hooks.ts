import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '../../query-keys'
import { getDeliveries } from './services'

export function useDeliveries(status?: string) {
    return useQuery({
        queryKey: queryKeys.commercial.deliveries.list(status || ''),
        queryFn: () => getDeliveries(status),
    })
}
