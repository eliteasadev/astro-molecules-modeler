import { nanoid } from "nanoid";
import { create } from "zustand";

export const useStore = create((set, get) => ({
  atoms: [],
  connectors: [],
  setAtoms: (atoms) => {
    set((state) => ({
      atoms,
    }));
  },
  addAtom: (x, y, z, rad) => {
    set((state) => ({
      atoms: [
        ...state.atoms,
        {
          id: nanoid(),
          pos: [x, y, z],
          rad: rad,
        },
      ],
    }));
  },
  removeAtom: (x, y, z) => {
    set((state) => ({
      atoms: state.atoms.filter((atom) => {
        const [X, Y, Z] = atom.pos;
        return X !== x || Y !== y || Z !== z;
      }),
    }));
  },
}));
