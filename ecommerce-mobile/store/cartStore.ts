import { create } from "zustand";

export const useCart = create((set) => ({
  items: [],

  addProduct: (product: any) =>
    //TODO: If already in cart, increase quantity, else, add a new item.
    set((state) => ({ items: [...state.items, { product, quantity: 1 }] })),
}));
