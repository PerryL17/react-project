import React, { useState } from "react";
import ToDoList from "./TodoList.js";
import AddTodoForm from "./AddToDoForm.js";

function App() {
  const [newTodo, setNewTodo] = useState("");
  return (
    <div>
      <h1>To Do List</h1>
      <AddTodoForm onAddTodo={setNewTodo} />
      <p>{newTodo}</p>
      <ToDoList />
    </div>
  );
}

export default App;
