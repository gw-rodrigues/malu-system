import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '../../query-keys'
import { getQrcodesProducts, getQrcodesBatches, getQrcodesDeliveries } from './services'

export function useQrcodesProducts() {
    return useQuery({
        queryKey: queryKeys.logistics.qrcodes.products.all,
        queryFn: getQrcodesProducts,
    })
}

export function useQrcodesBatches() {
    return useQuery({
        queryKey: queryKeys.logistics.qrcodes.batches.all,
        queryFn: getQrcodesBatches,
    })
}

export function useQrcodesDeliveries() {
    return useQuery({
        queryKey: queryKeys.logistics.qrcodes.deliveries.all,
        queryFn: getQrcodesDeliveries,
    })
}
