import React from "react";

import s from "./Button.module.css"

const Button = ({ nameButton, onClick }) => {
  return (
    <div>
      <button onClick={onClick} className={s.button}>{nameButton}</button>
    </div>
  );
};

export default Button;
