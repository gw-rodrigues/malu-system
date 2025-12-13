export type Product = {
    photo_url: string
    name: string
    description: string
    created_at: string
    price: number
    id: number
    category: string
    updated_at: string
}

export type Collection = {
    id: string
    name: string
    // Add other fields as discovered from usage or DB schema
    [key: string]: any
}

export type Category = {
    id: string
    name: string
    // Add other fields as discovered
    [key: string]: any
}

export type Variant = {
    id: string
    name: string
    // Add other fields as discovered
    [key: string]: any
}
