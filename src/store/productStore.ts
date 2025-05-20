import { create } from 'zustand';

export interface Product {
  id: number;
  title: string;
  price: number;
  subscription: boolean;
  tags: string[];
  subscription_discount?: number | string;
  // note: add other fields as per your API if needed
}

export interface Filters {
  tag: string;
  price: number | null;
  subscription: string | null;
}

interface ProductStore {
  products: Product[];
  filters: Filters;
  page: number;
  total: number;
  limit: number;
  totalCount: number;
  setProducts: (products: Product[]) => void;
  setFilters: (filters: Partial<Filters>) => void;
  setPage: (page: number) => void;
  setTotal: (total: number) => void;
  setLimit: (limit: number) => void;
  setTotalCount: (count: number) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  filters: { tag: '', price: null, subscription: null },
  page: 1,
  total: 0,
  limit: 12,
  totalCount: 0,
  setProducts: (products) => set({ products }),
  setFilters: (filters) => set((state) => ({ filters: { ...state.filters, ...filters }, page: 1 })),
  setPage: (page) => set({ page }),
  setTotal: (total) => set({ total }),
  setLimit: (limit) => set({ limit, page: 1 }),
  setTotalCount: (count) => set({ totalCount: count }),
})); 