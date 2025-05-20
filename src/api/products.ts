import { Filters, Product } from '../store/productStore';

export const fetchProducts = async (
  filters: Filters,
  page: number,
  limit: number
): Promise<{ products: Product[]; total: number; totalCount: number }> => {
  // Always fetch from the static mock data file
  const res = await fetch('/mock/products.json');
  const json = await res.json();
  let products = json.products as Product[];

  // Apply filters
  if (filters.tag) {
    products = products.filter(p =>
      p.tags.some(tag => tag.toLowerCase().includes(filters.tag.toLowerCase()))
    );
  }
  if (filters.price !== null) {
    products = products.filter(p => Number(p.price) === Number(filters.price));
  }
  if (filters.subscription) {
    products = products.filter(
      p =>
        (filters.subscription === 'Yes' && p.subscription === true) ||
        (filters.subscription === 'No' && p.subscription === false)
    );
  }

  // Pagination
  const totalCount = products.length;
  const total = Math.ceil(totalCount / limit);
  const paginated = products.slice((page - 1) * limit, page * limit);

  return { products: paginated, total, totalCount };
}; 