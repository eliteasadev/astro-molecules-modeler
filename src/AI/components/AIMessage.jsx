import { useStore as useChat } from "@/AI/store/chat";
import { AIIcon } from "@/AI/icons";

export function AIMessage({ message  } ){

  return (
    <div className="flex gap-1 items-center justify-between">
    <span className="flex items-center gap-1">
    <AIIcon />
    <p className="font-medium">: {message}</p>
    </span>
    
  </div>
  );
}