import { create } from 'zustand';

export interface Product {
  id: number;
  title: string;
  price: number;
  subscription: boolean;
  tags: string[];
  subscription_discount?: number | string;
}

export interface Filters {
  tag: string;
  price: number | null;
  subscription: string | null;
}

interface ProductStore {
  products: Product[];
  total: number;
  totalCount: number;
  setProducts: (products: Product[]) => void;
  setTotal: (total: number) => void;
  setTotalCount: (count: number) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  total: 0,
  totalCount: 0,
  setProducts: (products) => set({ products }),
  setTotal: (total) => set({ total }),
  setTotalCount: (count) => set({ totalCount: count }),
})); 