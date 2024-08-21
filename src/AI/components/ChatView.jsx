import { useStore as useChat } from "@/AI/store/chat";
import { AIMessage, UserMessage } from "@/AI/components";
import { Cross, SendIcon } from "@/AI/icons";
import {  useState } from "react";

export function ChatView() {
  const [message, setMessage] = useState("");

  const [messages, addMessage, setView] = useChat((state) => [
    state.messages,
    state.addMessage,
    state.setView,
  ]);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(message);
    const newMessage = {
      type: "User",
      message,
    };
    addMessage(newMessage);
    setMessage("");
  }

  

  return (
    <div className="fixed bottom-10 right-10 m-4 flex flex-col gap-2 rounded-md p-3 shadow-lg bg-emerald-100  text-emerald-950 ring-2 ring-emerald-950  w-2/6">
      {/* Header*/}
      <div className="flex items-center justify-between font-bold">Wutri! - Tú ayudante AI<button className="p-1 rounded-md bg-red-600 text-white" onClick={() => setView("button")}><Cross /></button></div>
      
      {/* Mensajes entrantes */}
      {messages.map((message, index) => (
        <div key={index}>
          {message.type === "AI" ? (
            <AIMessage message={message.message} />
          ) : (
            <UserMessage message={message.message} />
          )}
        </div>
      ))}

      {/* Input para enviar mensaje */}
      <span className="flex gap-2 items-center">
        <textarea
          className="w-full rounded-md bg-base-100 mt-2 p-2 text-white"
          type="text"
          placeholder="Escribe tu mensaje..."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="p-1 rounded-md bg-emerald-400 text-emerald-950"
        >
          <SendIcon />
        </button>
      </span>
    </div>
  );
}
