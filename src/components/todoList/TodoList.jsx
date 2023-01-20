import React from "react";
import s from "./TodoList.module.css";
import TodoItem from "../todoItem/TodoItem";

const TodoList = ({ sortBe }) => {
  return (
    <div className={s.list}>
      {sortBe.map((item) => (
        <TodoItem items={item} />
      ))}
    </div>
  );
};

export default TodoList;
