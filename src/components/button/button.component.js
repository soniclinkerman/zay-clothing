import React from "react";
import "./button.scss";
const Button = ({ children, isGoogleSign, inverted, ...otherProps }) => {
  return (
    <div>
      <button
        className={`${inverted ? "inverted" : ""} custom-button`}
        {...otherProps}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
