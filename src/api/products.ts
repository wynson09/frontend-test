import { Filters, Product } from '../store/productStore';

export const fetchProducts = async (
  filters: Filters,
  page: number,
  limit: number
): Promise<{ products: Product[]; total: number; totalCount: number }> => {
  let url = `http://localhost:3010/products?_page=${page}&_limit=${limit}`;
  if (filters.tag) url += `&tags_like=${encodeURIComponent(filters.tag)}`;
  if (filters.price !== null) url += `&price=${filters.price}`;
  if (filters.subscription)
    url += `&subscription=${filters.subscription === 'Yes' ? 'true' : 'false'}`;
  const res = await fetch(url);
  const data = await res.json();
  const totalCount = Number(res.headers.get('X-Total-Count')) || data.length;
  const total = Math.ceil(totalCount / limit);
  return { products: data, total, totalCount };
}; 