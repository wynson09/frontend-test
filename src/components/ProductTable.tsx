import React from 'react';
import { Product } from '../store/productStore';

interface ProductTableProps {
  products: Product[];
}

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
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
          <tr>
            <td className="py-2 px-4 border-b text-left" colSpan={5}>No products found.</td>
          </tr>
        ) : (
          Array.from({ length: 12 }).map((_, i) => (
            <tr key={i}>
              <td className="py-2 px-4 border-b text-left">{products[i]?.id ?? ''}</td>
              <td className="py-2 px-4 border-b text-left">{products[i]?.title ?? ''}</td>
              <td className="py-2 px-4 border-b text-left">{products[i]?.price ?? ''}</td>
              <td className="py-2 px-4 border-b text-left">
                {products[i]?.subscription === true
                  ? 'Yes'
                  : products[i]?.subscription === false
                  ? 'No'
                  : ''}
              </td>
              <td className="py-2 px-4 border-b text-left">
                {products[i]?.tags?.join(', ') ?? ''}
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default ProductTable; 