import { useStore } from "../../store/ui";
import { Cross } from "../../icons/Cross";

export function ConnectorOption(){
  const [ setOptions] = useStore((state) => [ state.setOptions]);
    return (
      <form
          className={`absolute z-10 shadow-xl bg-base-100 p-3 m-2 rounded-md flex gap-2 max-w-xl items-center`}
        >
          <select
            className="select w-full max-w-xs"
            onChange={(e) => {
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
              setOptions("Options");
            }}
          >
            <Cross />
          </button>
        </form>
    )
}