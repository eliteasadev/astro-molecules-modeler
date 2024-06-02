import { nanoid } from "nanoid";
import { create } from "zustand";

export const useStore = create((set, get) => ({
  atoms: [],
  connectors: [],
  connector: [],
  setConnector: (connector) => {
    set((state) => ({
      connector,
    }));
  },
  setAtoms: (atoms) => {
    set((state) => ({
      atoms,
    }));
  },
  addAtom: (x, y, z, rad, color) => {
    set((state) => ({
      atoms: [
        ...state.atoms,
        {
          id: nanoid(),
          pos: [x, y, z],
          rad: rad,
          color: color,
        },
      ],
    }));
    const atomsJSON = JSON.stringify(useStore.getState().atoms);
    const pathURL = btoa(atomsJSON);
    window.history.pushState({}, "", `/modeler/${pathURL}`);
  },
  removeAtom: (x, y, z) => {
    set((state) => ({
      atoms: state.atoms.filter((atom) => {
        const [X, Y, Z] = atom.pos;
        return X !== x || Y !== y || Z !== z;
      }),
    }));
    const atomsJSON = JSON.stringify(useStore.getState().atoms);
    const pathURL = btoa(atomsJSON);
    window.history.pushState({}, "", `/modeler/${pathURL}`);
  },
  addConnector: (startPoint, endPoint) => {
    set((state) => ({
      connectors: [
        ...state.connectors,
        {
          id: nanoid(),
          startPoint,
          endPoint
        }
      ]
    }));
  },
  removeConnector: (id) => {
    set((state) => ({
      connectors: state.connectors.filter((connector) => connector.id !== id)
    }));
  }
}));
