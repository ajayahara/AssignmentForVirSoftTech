import { useState } from "react";
export default function TodoInput({ updateTodo }) {
  const [title, setTitle] = useState("");
  const addTodo = () => {
    const date = new Date();
    const newTodo = {
      title: title,
      id: date.getTime() + " " + title
    };
    updateTodo(newTodo);
    setTitle("");
  };
  return (
    <div className="todoinput">
      <h2>TodoInput</h2>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={() => addTodo()}>Add</button>
      </div>
    </div>
  );
}
