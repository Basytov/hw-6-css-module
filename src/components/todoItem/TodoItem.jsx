import React from "react";
import s from "./TodoItem.module.css";

const TodoItem = ({ items }) => {
  return (
    <div className={s.item}>
      <p className={s.itemP}>{`${items.name} (${items.age} years old)`}</p>
    </div>
  );
};

export default TodoItem;
