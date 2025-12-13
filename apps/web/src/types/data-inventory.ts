export type InventoryItem = {
    id: string;
    sku: string | null;
    title: string | null;
    photo_url: string | null;
    in_stock: number;
    reserved: number;
    updated_at: string;
};

// Raw response type from Supabase if needed for casting
export type InventoryItemResponse = {
    id: string;
    sku: string | null;
    title: string | null;
    thumbnail: string | null;
    updated_at: string;
    inventory_level: {
        stocked_quantity: number;
        reserved_quantity: number;
    }[];
};
