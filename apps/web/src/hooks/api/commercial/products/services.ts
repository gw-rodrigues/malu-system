import { createClient } from '@/lib/supabase/client'
import { Product } from '@/types/data-product'

const supabase = createClient()

export type ProductFilters = {
    page?: string
    limit?: string
    search?: string
    categories?: string
}

export type ProductsResponse = {
    products: Product[]
    total_products: number
}

export async function getProducts(filters: ProductFilters = {}): Promise<ProductsResponse> {
    const page = Number(filters.page) || 1
    const limit = Number(filters.limit) || 10
    const from = (page - 1) * limit
    const to = from + limit - 1

    let query = supabase
        .from('product')
        .select(`
            *,
            collection:product_collection(title),
            variants:product_variant(count)
        `, { count: 'exact' })
        .range(from, to)

    if (filters.search) {
        query = query.ilike('title', `%${filters.search}%`)
    }

    // Categories filter might be tricky if it refers to collection or category table.
    // Assuming collection for now based on user request "collection"
    if (filters.categories) {
        // This depends on how categories are passed (ids or names)
        // query = query.eq('collection_id', filters.categories) 
        // implementation pending clarification or id usage
    }

    const { data, error, count } = await query

    if (error) {
        console.error('Error fetching products:', error)
        throw error
    }

    const products: Product[] = data.map((item: any) => ({
        id: item.id,
        title: item.title,
        photo_url: item.thumbnail,
        description: item.description,
        status: item.status,
        collection: item.collection?.title || null,
        sales_channels: item.sales_channels?.[0]?.count || 0,
        variants: item.variants?.[0]?.count || 0,
        price: 0, // Placeholder as requested
        created_at: item.created_at,
        updated_at: item.updated_at
    }))

    return {
        products,
        total_products: count || 0
    }
}
