import "./animations.css";
import { useStore as useChat } from "@/AI/store/chat";
import { ChatView, ButtonView } from "@/AI/components";


export function AIHelper() {
  const [view] = useChat((state) => [state.view, state.setView]);

  return view === "chat" ? (
    <ChatView />
  ) : (
    <ButtonView/>
  );
}
