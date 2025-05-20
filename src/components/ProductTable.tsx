import React from 'react';
import { Product } from '../store/productStore';

interface ProductTableProps {
  products: Product[];
  limit: number;
}

const ProductTable: React.FC<ProductTableProps> = ({ products, limit }) => {
  return (
    <table className="min-w-full bg-white border rounded shadow">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b text-left">ID</th>
          <th className="py-2 px-4 border-b text-left">Name</th>
          <th className="py-2 px-4 border-b text-left">Price</th>
          <th className="py-2 px-4 border-b text-left">Subscription</th>
          <th className="py-2 px-4 border-b text-left">Tags</th>
        </tr>
      </thead>
      <tbody>
        {products.length === 0 ? (
          <tr className="h-12">
            <td className="py-2 px-4 border-b text-left" colSpan={5}>No products found.</td>
          </tr>
        ) : (
          Array.from({ length: limit }).map((_, i) => (
            <tr key={i} className="h-12">
              <td className="py-2 px-4 border-b text-left">{products[i]?.id ?? '\u00A0'}</td>
              <td className="py-2 px-4 border-b text-left">{products[i]?.title ?? '\u00A0'}</td>
              <td className="py-2 px-4 border-b text-left">{products[i]?.price ?? '\u00A0'}</td>
              <td className="py-2 px-4 border-b text-left">
                {products[i]
                  ? (products[i]?.subscription === true
                    ? 'Yes'
                    : products[i]?.subscription === false
                    ? 'No'
                    : '')
                  : '\u00A0'}
              </td>
              <td className="py-2 px-4 border-b text-left">{products[i]?.tags?.join(', ') ?? '\u00A0'}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default ProductTable; 