import React from "react";
const todoList = [
  { id: 1, title: "groceries" },
  { id: 2, title: "clean house" },
  { id: 3, title: "pay bills" },
];

function ToDoList() {
  return (
    <ul>
      {todoList.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}

export default ToDoList;
