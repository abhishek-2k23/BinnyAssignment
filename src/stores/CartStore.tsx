import { Product } from "@/utils/mock";
import { create } from "zustand";

interface CartState {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (productId: string) => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
  isInCart: (productId: string) => boolean;
}

const useCartStore = create<CartState>((set, get) => ({
  products: [],
  addProduct: (product: Product) =>
    set((state) => {
      const existing = state.products.find((p) => p.id === product.id);
      if (!existing) {
        return {
          products: [...state.products, product],
        };
      }
      return state; // Don't add if already exists
    }),
  removeProduct: (productId: string) =>
    set((state) => ({
      products: state.products.filter((p) => p.id !== productId),
    })),
  getTotalPrice: () => {
    const state = get();
    return state.products.reduce((total, product) => total + product.price, 0);
  },
  getTotalItems: () => {
    const state = get();
    return state.products.length;
  },
  isInCart: (productId: string) => {
    const state = get();
    return state.products.some((p) => p.id === productId);
  },
}));

export default useCartStore;