import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '../../query-keys'
import { getCampaigns, getCoupons } from './services'

export function useCampaigns() {
    return useQuery({
        queryKey: queryKeys.commercial.promotions.campaigns.list(''),
        queryFn: getCampaigns,
    })
}

export function useCoupons() {
    return useQuery({
        queryKey: queryKeys.commercial.promotions.coupons.list(''),
        queryFn: getCoupons,
    })
}
