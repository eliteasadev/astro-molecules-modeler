import { AIIcon } from "@/AI/icons";
import { useStore as useChat } from "@/AI/store/chat";

export function ButtonView(){
  const [ setView] = useChat((state) => [ state.setView]);
  return (
    <button
      onClick={() => setView("chat")}
      class="fixed bottom-10 right-10 m-4 flex items-center gap-2 rounded-md p-3 shadow-lg bg-emerald-400 hover:bg-emerald-300 text-emerald-950 ring-2 ring-emerald-950 animate-bounce-3"
    >
      <AIIcon />
    </button>
  );
}