import { create } from 'zustand'

export const useStore = create((set, get) => ({
  options: "Options",
  setOptions: (options) => set({ options }),
}))