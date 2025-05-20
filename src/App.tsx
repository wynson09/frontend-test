import './App.css';
import React, { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import FilterSidebar from './components/FilterSidebar';
import ProductTable from './components/ProductTable';
import Pagination from './components/Pagination';
import { useProductStore } from './store/productStore';
import { fetchProducts } from './api/products';

const App: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    products, total, totalCount,
    setProducts, setTotal, setTotalCount
  } = useProductStore();

  // Get values from URL params with defaults
  const page = Number(searchParams.get('page')) || 1;
  const limit = Number(searchParams.get('limit')) || 12;
  const tag = searchParams.get('tag') ?? '';
  const priceStr = searchParams.get('price') ?? '';
  const subscription = searchParams.get('subscription') || null;

  // Only convert to number for filtering if not empty
  const filters = useMemo(() => ({
    tag: tag, // Keep as string for filtering
    price: priceStr !== '' ? Number(priceStr) : null,
    subscription
  }), [tag, priceStr, subscription]);

  // Update URL params when filters change
  const handleFilterChange = (newFilters: Partial<{ tag: string; price: string; subscription: string | null; }>) => {
    const params: Record<string, string> = {
      ...Object.fromEntries(searchParams)
    };

    // Handle tag updates
    if (newFilters.tag !== undefined) {
      if (newFilters.tag === '') {
        delete params.tag;
      } else {
        params.tag = newFilters.tag;
      }
    }

    // Handle price updates
    if (newFilters.price !== undefined) {
      if (newFilters.price === '') {
        delete params.price;
      } else {
        params.price = newFilters.price;
      }
    }

    // Handle subscription updates
    if (newFilters.subscription !== undefined) {
      if (newFilters.subscription === null) {
        delete params.subscription;
      } else {
        params.subscription = newFilters.subscription;
      }
    }

    // Always reset to first page on filter change
    params.page = '1';

    setSearchParams(params);
  };

  // Update URL params when page changes
  const handlePageChange = (newPage: number) => {
    const params: Record<string, string> = {
      ...Object.fromEntries(searchParams),
      page: newPage.toString(),
    };
    setSearchParams(params);
  };

  // Update URL params when limit changes
  const handleLimitChange = (newLimit: number) => {
    const params: Record<string, string> = {
      ...Object.fromEntries(searchParams),
      limit: newLimit.toString(),
      page: '1', // Reset to first page on limit change
    };
    setSearchParams(params);
  };

  // Handler to clear all filters
  const handleClearFilters = () => {
    const params: Record<string, string> = {};
    params.page = '1';
    const currentLimit = searchParams.get('limit');
    if (currentLimit) {
      params.limit = currentLimit;
    }
    setSearchParams(params);
  };

  // Fetch products whenever URL params change
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
        filters={{ tag, price: priceStr, subscription }}
        onChange={handleFilterChange}
        onClear={handleClearFilters}
      />
      <main className="flex-1 p-8">
        <div className="px-8 lg:px-20">
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
                onChange={e => handleLimitChange(Number(e.target.value))}
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
            onPageChange={handlePageChange}
          />
        </div>
      </main>
    </div>
  );
};

export default App; 