import React, {useState} from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
      e.preventDefault()
      
      if(!todo) return

      addTodo({ todo, completed: false})
      //obj xah so obj jasari pass garne
      //app mah matra  hainah yaha ni pass/spread garnah milxah
      setTodo("")
    }
    //form automatically submit hunxah , type submit vayo vane add
    //afai aauxah

  return (
      <form onSubmit={add} className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              //wiring of i/p with state--variable halne
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
              Add
          </button>
      </form>
  );
}

export default TodoForm;