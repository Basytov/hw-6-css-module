import "./App.css";
import { useState } from "react";
import TodoForm from "./components/todoForm/TodoForm";
import TodoList from "./components/todoList/TodoList";
// import styled from "styled-components";
// import s from "./components/button/Button.modules.css"
function App() {
  const [sortBe, setSortBe] = useState([]);

  sortBe.sort((a, b) => {
    return b.age - a.age;
  });

  const newAgeName = (data) => {
    const uptadeNew = [...sortBe];
    uptadeNew.push(data);
    setSortBe(uptadeNew);
  };

  return (
    <div className="App">
      <TodoForm newAgeName={newAgeName} />
      <TodoList sortBe={sortBe} />
    </div>
  );
}

export default App;
