import React, { useState } from "react";
import { colorScheme } from "../global/colors";
import { MdAddTask } from "react-icons/md";

const styles = {
  root: {
    display: "flex",
    color: colorScheme.primaryDark,
  },
  input: {
    flexGrow: 1,
    padding: "0.5rem",
  },
  icon: {
    marginLeft: "0.5rem",
  },
  iconBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  errorMessage: {
    color: "#b50000",
    fontSize: "0.7rem",
  },
};

const AddTask = ({ postTask }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const changeValHandler = (e) => {
    setValue(e.target.value);
    if (value !== "") {
      setError(false);
    }
  };
  const addTaskHandler = (e) => {
    if (value === "") {
      setError(true);
      return;
    }
    setError(false);
    postTask(value);
    setValue("");
  };
  return (
    <React.Fragment>
      <div style={styles.root}>
        <input style={styles.input} value={value} onChange={changeValHandler} />
        <button style={styles.iconBtn} onClick={addTaskHandler}>
          <MdAddTask style={styles.icon} />
        </button>
      </div>
      {error && <p style={styles.errorMessage}>Please enter a value!</p>}
    </React.Fragment>
  );
};

export default AddTask;
