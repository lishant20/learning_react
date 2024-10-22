import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: " Todo msg",
      completed: false,
    }
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleCompelete: (id) => {}
})


export const useTodo = () => {
  return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider

//.provider garnuxainah vane useContext lagxa
//useContext vitra barbar useContext import nagari garnah lai
//direct hook export garne i.e. useTodo()
//arko TodoContext.Provider yo lekhnu pardainah
//ContextApi large project ko lagi banako hainah--redux,zustand
//update toggle hoinah purai todo update hunxah 
//component jun vaye ni values todos bata linxa
//method ko def junai component mah ni lida hunxa
