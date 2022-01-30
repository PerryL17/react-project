import React from "react";
const todoList = [
  { id: 1, title: "groceries" },
  { id: 2, title: "clean house" },
  { id: 3, title: "pay bills" },
];
function App() {
  return (
    <div>
      <h1>To Do List</h1>
      <ul>
        {todoList.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
