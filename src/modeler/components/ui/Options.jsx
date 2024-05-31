import { useEffect,  useState } from "react";
import { useStore } from "../../store/ui";
import AtomIcon from "../../icons/Atom";
import ConnectionIcon from "../../icons/Connection";
import { Cross } from "../../icons/Cross";
import { CreateAtom } from "./AtomOption";
import { ConnectorOption } from "./ConnectorOption";

export default function OptionsPanel() {
  
  const [options, setOptions] = useStore((state) => [state.options, state.setOptions]);

  const [atoms, setAtoms] = useState(["", ""]);
  useEffect(() => {}, [options, atoms]);

  switch (options) {
    case "Options":
      return (
        <form
          className={`absolute z-10 shadow-xl bg-base-100 p-3 m-2 rounded-md flex gap-2`}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              setOptions("Atom");
            }}
            title="Agregar átomo"
            className="p-2 bg-emerald-600 hover:bg-emerald-400 rounded-sm"
          >
            <AtomIcon />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setOptions("Connection");
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
        <CreateAtom />
      );
    case "Connection":
      return (
        <ConnectorOption/>
      );
  }
}
