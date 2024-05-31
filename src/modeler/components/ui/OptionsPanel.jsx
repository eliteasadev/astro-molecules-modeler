import { useEffect, useRef, useState } from "react";
import AtomIcon from "../../icons/Atom";
import ConnectionIcon from "../../icons/Connection";
import OptionItem from "./OptionItem";
import { options } from "./PanelOptions";
import { Cross } from "../../icons/Cross";

export default function OptionsPanel() {
  const [optionSelected, setOptionSelected] = useState("Options");
  const [atoms, setAtoms] = useState(["", ""]);
  useEffect(() => {}, [optionSelected, atoms]);

  switch (optionSelected) {
    case "Options":
      return (
        <form
          className={`absolute z-10 shadow-xl bg-base-100 p-3 m-2 rounded-md flex gap-2`}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              setOptionSelected("Atom");
            }}
            title="Agregar átomo"
            className="p-2 bg-emerald-600 hover:bg-emerald-400 rounded-sm"
          >
            <AtomIcon />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setOptionSelected("Connection");
            }}
            title="Agregar átomo"
            className="p-2 bg-emerald-600 hover:bg-emerald-400 rounded-sm"
          >
            <ConnectionIcon />
          </button>
        </form>
      );
    case "Atom":
      return (
        <form
          className={`absolute z-10 shadow-xl bg-base-100 p-3 m-2 rounded-md flex gap-2 max-w-xl items-center`}
        >
          <label>X:</label> <input className="w-full p-2" type="number" />
          <label>Y:</label> <input className="w-full p-2" type="number" />
          <label>Z:</label> <input className="w-full p-2" type="number" />
          <label>R:</label> <input className="w-full p-2" type="number" />
          <button
            className="p-2 bg-emerald-600 hover:bg-emerald-400 rounded-sm text-white"
            onClick={(e) => {
              e.preventDefault();
              setOptionSelected("Options");
            }}
          >
            Crear
          </button>
          <button
            className="p-2 bg-red-600 hover:bg-red-400 rounded-sm text-white"
            onClick={(e) => {
              e.preventDefault();
              setOptionSelected("Options");
            }}
          >
            <Cross />
          </button>
        </form>
      );
    case "Connection":
      return (
        <form
          className={`absolute z-10 shadow-xl bg-base-100 p-3 m-2 rounded-md flex gap-2 max-w-xl items-center`}
        >
          <select
            className="select w-full max-w-xs"
            onChange={(e) => {
              setAtoms([e.target.value, atoms[1]]);
            }}
          >
            <option disabled selected>
              Selecciona el átomo 1
            </option>
            <option>Átomo 1</option>
            <option>Átomo 2</option>
          </select>
          <select className="select w-full max-w-xs">
            <option disabled selected>
              Selecciona el átomo 2
            </option>
            <option>Átomo 1</option>
            <option>Átomo 2</option>
          </select>
          <button className="p-2 bg-emerald-600 hover:bg-emerald-400 rounded-sm text-white">
            Crear
          </button>
          <button
            className="p-2 bg-red-600 hover:bg-red-400 rounded-sm text-white"
            onClick={(e) => {
              e.preventDefault();
              setOptionSelected("Options");
            }}
          >
            <Cross />
          </button>
        </form>
      );
  }
}
