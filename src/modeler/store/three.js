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
  setConnectors: (connectors) => {
    set((state) => ({
      connectors,
    }));
  },
  addAtom: (x, y, z, rad, color) => {
    set((state) => ({
      atoms: [
        ...state.atoms,
        {
          id: nanoid(),
          pos: [x, y, z],
          rad,
          color,
        },
      ],
    }));
    const structureToURL = {
      atoms: useStore.getState().atoms,
      connectors: useStore.getState().connectors,
    };
    const pathURL = btoa(JSON.stringify(structureToURL));
    window.history.pushState({}, "", `/modeler/${pathURL}`);
  },
  setAtomById: (id, pos, rad, color) => {
    set((state) => ({
      atoms: state.atoms.map((atom) => {
        if (atom.id === id) {
          return {
            ...atom,
            pos,
            rad,
            color,
          };
        }
        return atom;
      }),
    }));
    const structureToURL = {
      atoms: useStore.getState().atoms,
      connectors: useStore.getState().connectors,
    };
    const pathURL = btoa(JSON.stringify(structureToURL));
    window.history.pushState({}, "", `/modeler/${pathURL}`);
  },
  removeAtom: (x, y, z) => {
    set((state) => ({
      atoms: state.atoms.filter((atom) => {
        const [X, Y, Z] = atom.pos;
        return X !== x || Y !== y || Z !== z;
      }),
    }));
    const structureToURL = {
      atoms: useStore.getState().atoms,
      connectors: useStore.getState().connectors,
    };
    const pathURL = btoa(JSON.stringify(structureToURL));
    window.history.pushState({}, "", `/modeler/${pathURL}`);
  },
  addConnector: (startPoint, endPoint) => {
    set((state) => ({
      connectors: [
        ...state.connectors,
        {
          id: nanoid(),
          startPoint,
          endPoint,
        },
      ],
    }));
    const structureToURL = {
      atoms: useStore.getState().atoms,
      connectors: useStore.getState().connectors,
    };
    const pathURL = btoa(JSON.stringify(structureToURL));
    window.history.pushState({}, "", `/modeler/${pathURL}`);
  },
  removeConnector: (id) => {
    set((state) => ({
      connectors: state.connectors.filter((connector) => connector.id !== id),
    }));
    const structureToURL = {
      atoms: useStore.getState().atoms,
      connectors: useStore.getState().connectors,
    };
    const pathURL = btoa(JSON.stringify(structureToURL));
    window.history.pushState({}, "", `/modeler/${pathURL}`);
  },
}));
