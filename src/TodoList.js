import React from "react";
import TodoListItem from "./TodoListItem";
const todoList = [
  { id: 1, title: "groceries" },
  { id: 2, title: "clean house" },
  { id: 3, title: "pay bills" },
];

function ToDoList() {
  return (
    <ul>
      {todoList.map((item) => (
        <TodoListItem key={item.id} listItem={item} />
      ))}
    </ul>
  );
}

export default ToDoList;
