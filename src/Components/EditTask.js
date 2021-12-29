import React, { useState } from "react";
import { colorScheme } from "../global/colors";

const styles = {
  root: {
    height: "20vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  heading: {
    fontWeight: "400",
  },
  btn: {
    backgroundColor: "white",
    color: "black",
    border: `2px solid ${colorScheme.primary}`,
    padding: "0.2rem 1rem",
  },
  input: {
    padding: "0.4rem",
  },
};

const EditTask = ({ task, editTask }) => {
  const [value, setValue] = useState(task.prompt);
  const changeValHandler = (e) => {
    setValue(e.target.value);
  };
  const editHandler = (e) => {
    let temp = { ...task };
    temp.prompt = value;
    editTask(temp);
  };
  return (
    <div style={styles.root}>
      <h1 style={styles.heading}>Edit Task</h1>
      <input value={value} onChange={changeValHandler} style={styles.input} />
      <button style={styles.btn} onClick={editHandler}>
        Edit This Task
      </button>
    </div>
  );
};

export default EditTask;
