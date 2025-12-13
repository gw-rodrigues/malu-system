import { getInventory } from '@/hooks/api/logistics/inventory/services';
import { searchParamsCache } from '@/lib/searchparams';
import { InventoryItem } from '@/types/data-inventory';
import { InventoryTable } from './inventory-tables';
import { columns } from './inventory-tables/columns';

type InventoryListingPageProps = {};

export default async function InventoryListingPage({ }: InventoryListingPageProps) {
    // Showcasing the use of search params cache in nested RSCs
    const page = searchParamsCache.get('page');
    const search = searchParamsCache.get('name');
    const pageLimit = searchParamsCache.get('perPage');
    const categories = searchParamsCache.get('category');

    const filters = {
        page: String(page),
        limit: String(pageLimit),
        ...(search && { search }),
        ...(categories && { categories: categories })
    };

    const data = await getInventory();
    const totalProducts = data.length;
    const products: InventoryItem[] = data;

    return (
        <InventoryTable
            data={products}
            totalItems={totalProducts}
            columns={columns}
        />
    );
}
