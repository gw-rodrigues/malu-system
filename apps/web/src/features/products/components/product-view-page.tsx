'use client'
import { notFound } from 'next/navigation';
import ProductForm from './product-form';
import { useProduct } from '@/hooks/api/commercial/products';

type TProductViewPageProps = {
  productId: string;
};

export default function ProductViewPage({
  productId
}: TProductViewPageProps) {

  async function getProduct() {
    const product = await useProduct(productId)
    return product
  }

  if (productId !== 'new') {
    const data = getProduct()
    console.log('product', data)
    if (!data) {
      notFound();
    }
    return <ProductForm initialData={data} pageTitle='Edit Product' />;
  }

  return <ProductForm initialData={null} pageTitle='Create New Product' />;
}
