import React from "react";
import s from "./Input.module.css"

export const Input = ({ id, labelName, placeholder, type, ...rest }) => {
  return (
    <div className={s.input}>
      <label htmlFor={id} className={s.label}>{labelName}</label>
      <input className={s.input2} type={type} placeholder={placeholder || " "} id={id} {...rest} />
    </div>
  );
};
