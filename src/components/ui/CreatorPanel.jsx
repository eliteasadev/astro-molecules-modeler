export function CreatorPanelComponent() {
  return (
    // Floating panel component
    <div className="absolute z-10 shadow-xl bg-base-100 p-6 m-2 rounded-md">
      {/* Formulario */}
      <form className="flex flex-col gap-5" onSubmit={(e) => {
        e.preventDefault();
      }}>
        <span className="text-center font-semibold text-white">Nuevo Átomo</span>
        {/* Center */}
        <div className="flex flex-row gap-3 ">
          <div className="flex  gap-2 items-center">
            <label htmlFor="" className="font-semibold text-gray-200">
              X:
            </label>
            <input
              type="text"
              placeholder="1"
              className="max-w-12 rounded p-2 text-center bg-cyan-700 placeholder:text-gray-400 outline-none focus:outline-cyan-300"
            />
          </div>

          <div className="flex  gap-2 items-center">
            <label htmlFor="" className="font-semibold text-gray-200">
              Y:
            </label>
            <input
              type="text"
              placeholder="1"
              className="max-w-12 rounded p-2 text-center bg-cyan-700 placeholder:text-gray-300 outline-none focus:outline-cyan-300"
            />
          </div>

          <div className="flex  gap-2 items-center">
            <label htmlFor="" className="font-semibold text-gray-200">
              Z:
            </label>
            <input
              type="text"
              placeholder="1"
              className="max-w-12 rounded p-2 text-center bg-cyan-700 placeholder:text-gray-300 outline-none focus:outline-cyan-300"
            />
          </div>
        </div>
        {/* Radius & color*/}
        <div className="flex flex-row gap-3 ">
          <div className="flex  gap-2 items-center">
            <label htmlFor="" className="font-semibold text-gray-200">
              Radio:
            </label>
            <input
              type="text"
              placeholder="0.3"
              className="max-w-12 rounded p-2 text-center bg-cyan-700 placeholder:text-gray-300 outline-none focus:outline-cyan-300"
            />
          </div>
          <div className="flex  gap-2 items-center">
            <label htmlFor="" className="font-semibold text-gray-200">
              Color:
            </label>
            <div className="bg-red-400 p-2 rounded-sm"></div>
          </div>
        </div>
        <button class="bg-cyan-300 text-gray-200 rounded-sm p-2 mx-6">
          <span className="font-semibold text-base-100">Crear</span>
        </button>
      </form>
    </div>
  );
}
