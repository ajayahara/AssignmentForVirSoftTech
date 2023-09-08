import { useState } from "react";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";
export default function App() {
  const [todoList, setTodoList] = useState([]);
  const updateTodo = (data) => {
    return setTodoList([...todoList, data]);
  };
  const deleteTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };
  return (
    <div className="App">
      <h1>Welcome To TODO App</h1>
      <TodoInput updateTodo={updateTodo} />
      <TodoList todoList={todoList} deleteTodo={deleteTodo} />
    </div>
  );
}
