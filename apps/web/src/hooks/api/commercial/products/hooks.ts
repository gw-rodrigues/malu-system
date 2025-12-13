import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { queryKeys } from '../../query-keys'
import {
    getProducts,
    getProduct,
    createProductService,
    getCollections,
    getCategories,
    getVariants
} from './services'

// --- Products ---

export function useProducts(filters: string = '') {
    return useQuery({
        queryKey: queryKeys.commercial.products.list(filters),
        queryFn: () => getProducts(filters),
    })
}

export function useProduct(id: string) {
    return useQuery({
        queryKey: queryKeys.commercial.products.detail(id),
        queryFn: () => getProduct(id),
        enabled: !!id,
    })
}

export function useCreateProduct() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: createProductService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.commercial.products.lists() })
        }
    })
}

// ... Additional mutations (Update, Delete) would follow similar pattern

// --- Collections ---

export function useCollections() {
    return useQuery({
        queryKey: queryKeys.commercial.collections.list(''),
        queryFn: getCollections,
    })
}

// --- Categories ---

export function useCategories() {
    return useQuery({
        queryKey: queryKeys.commercial.categories.list(''),
        queryFn: getCategories,
    })
}


// --- Variants ---

export function useVariants() {
    return useQuery({
        queryKey: queryKeys.commercial.variants.list(''),
        queryFn: getVariants,
    })
}
