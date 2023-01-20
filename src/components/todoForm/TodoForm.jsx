import React from "react";
import { useState } from "react";
import s from "./TodoForm.module.css"
import { Input } from "../UI/input/Input";
import Button from "../UI/button/Button";

const TodoForm = ({ newAgeName }) => {
  const [name, setNameBe] = useState("");

  const [age, setAgeBe] = useState("");

  const textHandler = (event) => {
    setNameBe(event.target.value);
  };

  const ageHandler = (event) => {
    setAgeBe(event.target.value);
  };

  const object = {
    name,
    age,
  };

  const buttonHandler = () => {
    newAgeName(object);
    setNameBe("");
    setAgeBe("");
  };

  return (
    <div className={s.div}>
      <Input
        key={"Username"}
        labelName={"Username"}
        type={"text"}
        placeholder={"name..."}
        value={name}
        onChange={textHandler}
      />
      <Input
        key={"Age"}
        labelName={"Age"}
        type={"number"}
        placeholder={"age... "}
        value={age}
        onChange={ageHandler}
      />
      <div className={s.btn}>
        <Button onClick={buttonHandler} nameButton={"Add User"} />
      </div>
    </div>
  );
};

export default TodoForm;
