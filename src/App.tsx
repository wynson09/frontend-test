import './App.css';
import React, { useEffect } from 'react';
import FilterSidebar from './components/FilterSidebar';
import ProductTable from './components/ProductTable';
import Pagination from './components/Pagination';
import { useProductStore, Filters, Product } from './store/productStore';
import { fetchProducts } from './api/products';

const App: React.FC = () => {
  const {
    products, filters, page, total, limit, totalCount,
    setProducts, setFilters, setPage, setTotal, setLimit, setTotalCount
  } = useProductStore();

  useEffect(() => {
    fetchProducts(filters, page, limit).then(({ products, total, totalCount }) => {
      setProducts(products);
      setTotal(total);
      setTotalCount(totalCount);
    });
  }, [filters, page, limit, setProducts, setTotal, setTotalCount]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <FilterSidebar
        filters={filters}
        onChange={setFilters}
      />
      <main className="flex-1 p-8">
        <div className="px-20">
          <div className="flex items-center justify-between mb-4">
            <div className="text-gray-700 font-medium">
              Showing {products.length} of {totalCount} results
            </div>
            <div>
              <label htmlFor="limit" className="mr-2 font-medium">Items per page:</label>
              <select
                id="limit"
                className="border rounded p-2"
                value={limit}
                onChange={e => setLimit(Number(e.target.value))}
              >
                {[2, 5, 10, 12, 15, 20].map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>
          <ProductTable products={products} limit={limit} />
          <Pagination
            page={page}
            totalPages={total}
            onPageChange={setPage}
          />
        </div>
      </main>
    </div>
  );
};

export default App; 