import './App.css';
import React, { useEffect } from 'react';
import FilterSidebar from './components/FilterSidebar';
import ProductTable from './components/ProductTable';
import Pagination from './components/Pagination';
import { useProductStore, Filters, Product } from './store/productStore';
import { fetchProducts } from './api/products';

const App: React.FC = () => {
  const {
    products, filters, page, total,
    setProducts, setFilters, setPage, setTotal
  } = useProductStore();

  useEffect(() => {
    fetchProducts(filters, page).then(({ products, total }) => {
      setProducts(products);
      setTotal(Math.ceil(total / 12)); // 12 per page
    });
  }, [filters, page, setProducts, setTotal]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <FilterSidebar
        filters={filters}
        onChange={setFilters}
      />
      <main className="flex-1 p-8">
        <ProductTable products={products} />
        <Pagination
          page={page}
          totalPages={total}
          onPageChange={setPage}
        />
      </main>
    </div>
  );
};

export default App; 