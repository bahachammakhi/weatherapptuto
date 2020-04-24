import React from "react";
import classes from "./input.module.css";

const Input = ({ onChange }) => {
  return (
    <div>
      <input
        onChange={(e) => onChange(e.target.value)}
        name="city"
        type="text"
      />
    </div>
  );
};

export default Input;
