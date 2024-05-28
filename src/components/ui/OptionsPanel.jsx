import { useState } from "react";
import AtomIcon from "../../icons/Atom";
import ConnectionIcon from "../../icons/Connection";
import OptionItem from "./OptionItem";
import { options } from "./PanelOptions";

export default function OptionsPanel() {
  const [optionSelected, setOptionSelected] = useState("Options");

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
      return <div>Creación de un átomo</div>;
    case "Connection":
      return <div>Conexión entre átomos</div>;
  }
}
