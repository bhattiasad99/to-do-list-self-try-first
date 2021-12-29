import React, { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { colorScheme } from "../global/colors";
import classes from "./Tasks.module.css";

import * as Icons from "react-icons/md";

const { MdEdit, MdDelete } = Icons;

const styles = {
  root: {
    height: "30vh",
  },
  list: {
    listStyleType: "none",
    maxHeight: "100%",
  },
  listElement: {
    color: colorScheme.primaryDark,
    marginBottom: "1rem",
    padding: "0.3rem",
    display: "flex",
  },
  taskText: {
    flexGrow: 1,
  },
  actions: {
    display: "flex",
    marginRight: "1rem",
  },
  iconBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
  },
};

const Tasks = ({ tasks, delTask, editTask }) => {
  const [hoveredID, setHoveredID] = useState(0);
  const showBtns = (e, key) => {
    setHoveredID(key);
  };
  const resetBtns = (e) => {
    setHoveredID(0);
  };
  const editHandler = (e) => {
    e.preventDefault();
    editTask(hoveredID);
  };
  const delHandler = (e) => {
    e.preventDefault();
    delTask(hoveredID);
  };
  return (
    <div style={styles.root}>
      <ul style={styles.list}>
        <Scrollbars
          style={{
            width: "100%",
            height: styles.root.height,
          }}
        >
          {tasks.map((task) => (
            <li
              style={styles.listElement}
              onMouseEnter={(e) => showBtns(e, task.id)}
              onMouseLeave={resetBtns}
              key={task.id}
            >
              <div style={styles.taskText}>{task.prompt}</div>
              {hoveredID === task.id && (
                <div style={styles.actions}>
                  <button style={styles.iconBtn} onClick={editHandler}>
                    <MdEdit style={{ marginRight: "0.5rem" }} />
                  </button>
                  <button style={styles.iconBtn} onClick={delHandler}>
                    <MdDelete />
                  </button>
                </div>
              )}
            </li>
          ))}
        </Scrollbars>
      </ul>
    </div>
  );
};

export default Tasks;
