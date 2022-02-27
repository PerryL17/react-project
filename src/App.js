import React, { useEffect, useState } from "react";
import ToDoList from "./TodoList.js";
import AddTodoForm from "./AddToDoForm.js";

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("savedTodoList") || "[]")
  );
  useEffect(() => {
    const jsonTodoList = JSON.stringify(todoList);
    localStorage.setItem("savedTodoList", jsonTodoList);
  }, [todoList]);
  return [todoList, setTodoList];
};
function App() {
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };
  const [todoList, setTodoList] = useSemiPersistentState();

  return (
    <>
      <h1>To Do List</h1>
      <AddTodoForm onAddTodo={addTodo} />

      <ToDoList todoList={todoList} />
    </>
  );
}

export default App;
