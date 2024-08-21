import { create } from 'zustand'

export const useStore = create((set, get) => ({
  view: 'button',
  setView: (view) => {
    set((state) => ({
      view
    }))
  },
  messages: [
    {
      type: 'AI',
      message: '¡Pregunta algo sobre química!'
    },
    {
      type: 'User',
      message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt amet in quas dicta laudantium dignissimos soluta qui et, dolores aspernatur!'
    }
  ],
  addMessage: (message) => {
    set((state) => ({
      messages: [...state.messages, message]
    }))
  }
}))
