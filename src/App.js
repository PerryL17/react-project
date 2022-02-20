import React, { useState } from "react";
import ToDoList from "./TodoList.js";
import AddTodoForm from "./AddToDoForm.js";

function App() {
  const [todoList, setTodoList] = useState([]);
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  return (
    <div>
      <h1>To Do List</h1>
      <AddTodoForm onAddTodo={addTodo} />

      <ToDoList todoList={todoList} />
    </div>
  );
}

export default App;
