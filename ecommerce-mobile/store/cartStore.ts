import { create } from "zustand";

interface CartItem {
  product: any;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addProduct: (product: any) => void;
  resetCart: () => void;
}

export const useCart = create<CartState>()((set) => ({
  items: [],

  addProduct: (product: any) =>
    //TODO: If already in cart, increase quantity, else, add a new item.
    set((state) => ({ items: [...state.items, { product, quantity: 1 }] })),

  resetCart: () => set({ items: [] }),
}));
