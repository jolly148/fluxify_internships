import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Learn React" },
    { id: 2, task: "Practice Hooks" }
  ]);
  const [newTask, setNewTask] = useState("");

  const addTodo = () => {
    if (!newTask.trim()) return;
    const newTodo = { id: Date.now(), task: newTask };
    setTodos([...todos, newTodo]);
    setNewTask("");
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h2>Day 5: Lists & Keys</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.task} 
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <input 
        type="text" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
        placeholder="Add new task"
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}

export default TodoList;
