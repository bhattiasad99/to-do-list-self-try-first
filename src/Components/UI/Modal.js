import React from "react";
import { colorScheme } from "../../global/colors";

const styles = {
  modal: {
    backgroundColor: colorScheme.dark,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    color: colorScheme.primaryDark,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const Modal = ({ showModal, children, ...otherProps }) => {
  return (
    // <div style={{ display: showModal ? "block" : "none" }} {...otherProps}>
    <div {...otherProps}>
      <div style={styles.modal}>{children}</div>
    </div>
  );
};

export default Modal;
