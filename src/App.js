import React from "react";
import ToDoList from "./TodoList.js";
import AddTodoForm from "./AddToDoForm.js";

function App() {
  return (
    <div>
      <h1>To Do List</h1>
      <AddTodoForm />
      <ToDoList />
    </div>
  );
}

export default App;
