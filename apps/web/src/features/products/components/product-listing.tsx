import { getProducts } from '@/hooks/api/commercial/products/services';
import { searchParamsCache } from '@/lib/searchparams';
import { Product } from '@/types/data-product';
import { ProductTable } from './product-tables';
import { columns } from './product-tables/columns';

type ProductListingPage = {};

export default async function ProductListingPage({ }: ProductListingPage) {
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

  const data = await getProducts(filters);
  const totalProducts = data.total_products;
  const products: Product[] = data.products;

  return (
    <ProductTable
      data={products}
      totalItems={totalProducts}
      columns={columns}
    />
  );
}
