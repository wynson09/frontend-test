import React from 'react';
import { Product } from '../store/productStore';

interface ProductTableProps {
  products: Product[];
  limit: number;
}

const ProductTable: React.FC<ProductTableProps> = ({ products, limit }) => {
  return (
    <table className="min-w-full bg-white border rounded shadow table-fixed">
      <thead className="bg-[#3A6B78]">
        <tr>
          <th className="py-4 px-4 border-b text-left text-lg font-bold text-light tracking-wide w-1/6">ID</th>
          <th className="py-4 px-4 border-b text-left text-lg font-bold text-light tracking-wide w-1/6">Title</th>
          <th className="py-4 px-4 border-b text-left text-lg font-bold text-light tracking-wide w-1/6">Tags</th>
          <th className="py-4 px-4 border-b text-right text-lg font-bold text-light tracking-wide w-1/6">Price</th>
          <th className="py-4 px-4 border-b text-center text-lg font-bold text-light tracking-wide w-1/6">Subscription</th>
          <th className="py-4 px-4 border-b text-center text-lg font-bold text-light tracking-wide w-1/6">Subscription Discount</th>
        </tr>
      </thead>
      <tbody>
        {products.length === 0 ? (
          <tr className="h-12">
            <td className="py-2 px-4 border-b text-center w-1/6" colSpan={6}>
              <span className="block w-full text-center">No products found.</span>
            </td>
          </tr>
        ) : (
          Array.from({ length: limit }).map((_, i) => (
            <tr key={i} className={`h-12 ${i % 2 === 1 ? 'bg-light' : ''} hover:bg-accent/10`}>
              <td className="py-2 px-4 border-b text-left w-1/6">{products[i]?.id ?? '\u00A0'}</td>
              <td className="py-2 px-4 border-b text-left w-1/6">{products[i]?.title ?? '\u00A0'}</td>
              <td className="py-2 px-4 border-b text-left w-1/6">{products[i]?.tags?.join(', ') ?? '\u00A0'}</td>
              <td className="py-2 px-4 border-b text-right w-1/6">{products[i]?.price ?? '\u00A0'}</td>
              <td className="py-2 px-4 border-b text-center w-1/6">
                {products[i]
                  ? (products[i]?.subscription === true
                    ? 'Yes'
                    : products[i]?.subscription === false
                    ? 'No'
                    : '')
                  : '\u00A0'}
              </td>
              <td className="py-2 px-4 border-b text-center w-1/6">
                {products[i]
                  ? products[i].subscription
                    ? (products[i].subscription_discount != null
                        ? `${products[i].subscription_discount}%`
                        : '-')
                    : '-'
                  : '\u00A0'}
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default ProductTable; 