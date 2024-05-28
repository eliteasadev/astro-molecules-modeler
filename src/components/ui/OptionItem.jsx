export default function OptionItem({ icon, fn }) {
  return (
    <button
      title="Agregar átomo"
      className="p-2 bg-emerald-600 hover:bg-emerald-400 rounded-sm"
      onClick={fn}
    >
      {icon()}
    </button>
  );
}
