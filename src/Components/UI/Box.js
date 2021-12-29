import React from "react";
import { colorScheme } from "../../global/colors";
const boxStyle = {
  backgroundColor: colorScheme.secondaryLight,
  margin: "2rem",
  width: "50vw",
  padding: "1rem",
  borderRadius: "5px",
  boxShadow: "0px 5px 9px -3px rgba(0,0,0,0.75)",
};

const Box = ({ children, ...otherProps }) => {
  return (
    <div style={boxStyle} {...otherProps}>
      {children}
    </div>
  );
};
export default Box;
