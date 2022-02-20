import React from "react";
import TodoListItem from "./TodoListItem";

function ToDoList({ todoList }) {
  return (
    <ul>
      {todoList.map((item) => (
        <TodoListItem key={item.id} listItem={item} />
      ))}
    </ul>
  );
}

export default ToDoList;
