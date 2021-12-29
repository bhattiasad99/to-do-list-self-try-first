import React, { useState, useEffect } from "react";
import Tasks from "./Components/Tasks";
import { colorScheme } from "./global/colors";
import Box from "./Components/UI/Box";
import AddTask from "./Components/AddTask";
import Modal from "./Components/UI/Modal";
import EditTask from "./Components/EditTask";
import { AiFillGithub } from "react-icons/ai";

const dummyTasks = [
  {
    id: Math.random(),
    prompt: "Check windows updates",
  },
  {
    id: Math.random(),
    prompt: "Clean house",
  },
];

function App() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState({});
  useEffect(() => {
    setTasks(dummyTasks);
  }, []);
  const headingStyle = {
    fontWeight: 400,
  };
  const footerStyle = {
    position: "absolute",
    background: colorScheme.primaryDark,
    bottom: 0,
    left: 0,
    right: 0,
    height: "3rem",
    color: "white",
    display: "flex",
    alignItems: "center",
    padding: "0 1rem",
    justifyContent: "space-between",
  };
  const mainStyle = {
    height: "100vh",
    background: colorScheme.primaryLight,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
  };

  const postTask = (e) => {
    let temp = [...tasks];
    temp.unshift({
      id: Math.random(),
      prompt: e,
    });
    setTasks(temp);
  };

  const delTask = (e) => {
    let temp = [...tasks];
    const tempAfterDeletion = temp.filter((task) => {
      return task.id !== e;
    });
    setTasks(tempAfterDeletion);
  };

  const editTask = (e) => {
    const findTask = tasks.find((task) => task.id === e);
    setShowModal(true);
    setTaskToEdit(findTask);
  };
  const retrieveTaskChanges = (e) => {
    let temp = [...tasks];
    temp.splice(
      temp.findIndex((task) => e.id === task.id),
      1,
      e
    );
    setTasks(temp);
    setShowModal(false);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <main style={mainStyle}>
        <h1 style={headingStyle}>To Do List</h1>
        <Box>
          <AddTask postTask={postTask} />
        </Box>
        <Box>
          <Tasks tasks={tasks} delTask={delTask} editTask={editTask} />
        </Box>
        {showModal && (
          <Modal showModal={showModal} onClick={() => setShowModal(false)}>
            <Box onClick={stopPropagation}>
              <EditTask task={taskToEdit} editTask={retrieveTaskChanges} />
            </Box>
          </Modal>
        )}
      </main>
      <footer style={footerStyle}>
        <div>Developed by Asad Zubair Bhatti</div>
        <a href="https://github.com/bhattiasad99">
          <AiFillGithub style={{ color: "white", fontSize: "1.4rem" }} />
        </a>
      </footer>
    </>
  );
}

export default App;
