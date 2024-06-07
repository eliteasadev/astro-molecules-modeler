import { create } from "zustand";

export const useStore = create((set, get) => ({
  options: "Options",
  atomSelected: {},
  setAtomSelected: (atomSelected) => {
    set((state) => ({
      atomSelected,
    }));
  },
  setOptions: (options) => {
    set((state) => ({
      options,
    }));
  },
}));
