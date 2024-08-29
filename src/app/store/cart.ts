import { create } from "zustand";

import { Book } from "../../constants";

type CartState = {
  cartItems: Book[];
  addItemToCart: (item: Book) => void;
};
export const useCartStore = create<CartState>((set) => ({
  cartItems: [],
  addItemToCart: (item: Book) =>
    set((state) => ({ cartItems: [...state.cartItems, item] })),
}));
