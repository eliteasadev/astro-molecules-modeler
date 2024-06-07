import { useEffect } from "react";
import { useStore as useAtoms } from "../store/three";
import { useStore as useUI } from "../store/ui";

export function AtomProperties() {
  const [setAtomById] = useAtoms((state) => [state.setAtomById]);

  const [atomSelected, setAtomSelected] = useUI((state) => [
    state.atomSelected,
    state.setAtomSelected,
  ]);

  return Object.keys(atomSelected).length === 0 ? (
    <></>
  ) : (
    <form
      className={`absolute z-10 shadow-xl bg-base-100 p-3 mt-20 mx-2 rounded-md flex gap-2 flex-col`}
    >
      <div className="flex gap-2 items-center justify-center align-middle">
        <label htmlFor="" className="">
          X:
        </label>
        <input
          className="w-full p-2"
          type="number"
          value={atomSelected.pos[0]}
          onChange={(e) => {
            e.stopPropagation();
            setAtomSelected({
              ...atomSelected,
              pos: [e.target.value, atomSelected.pos[1], atomSelected.pos[2]],
            });
          }}
        />
      </div>
      <div className="flex gap-2 items-center justify-center align-middle">
        <label htmlFor="">Y:</label>
        <input
          type="number"
          className="w-full p-2"
          value={atomSelected.pos[1]}
          onChange={(e) => {
            e.stopPropagation();
            setAtomSelected({
              ...atomSelected,
              pos: [atomSelected.pos[0], e.target.value, atomSelected.pos[2]],
            });
          }}
        />
      </div>
      <div className="flex gap-2 items-center justify-center align-middle">
        <label htmlFor="">Z:</label>
        <input
          type="number"
          className="w-full p-2"
          value={atomSelected.pos[2]}
          onChange={(e) => {
            e.stopPropagation();
            setAtomSelected({
              ...atomSelected,
              pos: [atomSelected.pos[0], atomSelected.pos[1], e.target.value],
            });
          }}
        />
      </div>
      <div className="flex gap-2 items-center justify-center align-middle">
        R:
        <input
          type="number"
          className="w-full p-2"
          value={atomSelected.rad}
          onChange={(e) => {
            e.stopPropagation();
            setAtomSelected({
              ...atomSelected,
              rad: e.target.value,
            });
          }}
        />
      </div>
      <div className="flex gap-2 items-center justify-center align-middle">
        <label htmlFor="">Color:</label>
        <input
          type="color"
          value={`${atomSelected.color}`}
          onChange={(e) => {
            e.stopPropagation();
            setAtomSelected({ ...atomSelected, color: e.target.value });
          }}
          className=" w-full bg-slate-700 rounded-sm"
        />
      </div>
      <div className="flex gap-4  justify-center ">
        <button
          className="p-2 bg-emerald-600 hover:bg-emerald-400 rounded-sm text-white"
          onClick={(e) => {
            setAtomById(
              atomSelected.id,
              atomSelected.pos,
              atomSelected.rad,
              atomSelected.color
            );
            setAtomSelected({});
          }}
        >
          Modificar
        </button>
        <button
          className="p-2 bg-red-600 hover:bg-red-400 rounded-sm text-white"
          onClick={(e) => {
            e.stopPropagation();
            setAtomSelected({});
          }}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
