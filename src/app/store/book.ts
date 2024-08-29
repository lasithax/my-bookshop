import { create } from "zustand";

type CartState = {
  selectedBookId: number | null;
  setSelectedBookId: (id: number) => void;
};
export const useBookStore = create<CartState>((set) => ({
  selectedBookId: null,
  setSelectedBookId: (id: number) => set({ selectedBookId: id }),
}));
