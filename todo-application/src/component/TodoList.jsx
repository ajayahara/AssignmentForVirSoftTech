export default function TodoList({ todoList, deleteTodo }) {
    return (
      <div className="todolist">
        <h2>TodoList</h2>
          {todoList.length
            ? todoList.map((todo) => {
                return (
                  <div key={todo.id}>
                    <span>{todo.title}</span>
                    <button onClick={() => deleteTodo(todo.id)}>Remove</button>
                  </div>
                );
              })
            : "No tasks added yet!"}
      </div>
    );
  }
  