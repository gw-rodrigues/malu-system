import { createClient } from '@/lib/supabase/client'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { queryKeys } from '../query-keys'

// --- Products ---

export function useProducts(filters: string = '') {
    return useQuery({
        queryKey: queryKeys.commercial.products.list(filters),
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('products').select('*') // Adjust query based on filters
            if (error) throw error
            return data
        },
    })
}

export function useProduct(id: string) {
    return useQuery({
        queryKey: queryKeys.commercial.products.detail(id),
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('products').select('*').eq('id', id).single()
            if (error) throw error
            return data
        },
        enabled: !!id,
    })
}

export function useCreateProduct() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async (newProduct: any) => {
            const supabase = createClient()
            const { data, error } = await supabase.from('products').insert(newProduct).select().single()
            if (error) throw error
            return data
        },
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
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('collections').select('*')
            if (error) throw error
            return data
        },
    })
}

// --- Categories ---

export function useCategories() {
    return useQuery({
        queryKey: queryKeys.commercial.categories.list(''),
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('categories').select('*')
            if (error) throw error
            return data
        },
    })
}


// --- Variants ---

export function useVariants() {
    return useQuery({
        queryKey: queryKeys.commercial.variants.list(''),
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('variants').select('*')
            if (error) throw error
            return data
        },
    })
}
