import { createClient } from '@/lib/supabase/client'
import { Product, Collection, Category, Variant } from './types'

const supabase = createClient()

export async function getProducts(filters: string = ''): Promise<Product[]> {
    const { data, error } = await supabase.from('products').select('*') // Adjust query based on filters
    if (error) throw error
    return data as Product[]
}

export async function getProduct(id: string): Promise<Product> {
    const { data, error } = await supabase.from('products').select('*').eq('id', id).single()
    if (error) throw error
    return data as Product
}

export async function createProductService(newProduct: any): Promise<Product> {
    const { data, error } = await supabase.from('products').insert(newProduct).select().single()
    if (error) throw error
    return data as Product
}

export async function getCollections(): Promise<Collection[]> {
    const { data, error } = await supabase.from('collections').select('*')
    if (error) throw error
    return data as Collection[]
}

export async function getCategories(): Promise<Category[]> {
    const { data, error } = await supabase.from('categories').select('*')
    if (error) throw error
    return data as Category[]
}

export async function getVariants(): Promise<Variant[]> {
    const { data, error } = await supabase.from('variants').select('*')
    if (error) throw error
    return data as Variant[]
}
