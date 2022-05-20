import React, { useState } from "react";
import styled from "styled-components";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

// const FormInput = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${({ invalid }) => (invalid ? "red" : "black")};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${({ invalid }) => (invalid ? "red" : "#ccc")};
//     background: ${({ invalid }) => (invalid ? "#ffd7d7" : "transparent")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: transparent;
//     border-color: #8b005d;
//   }

//   &.invalid input {
//     border-color: red;
//     background: #ffd7d7;
//   }
// `;

const CourseInput = ({ onAddGoal }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    onAddGoal(enteredValue);
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
