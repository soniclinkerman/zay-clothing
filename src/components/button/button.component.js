import React from "react";
import "./button.scss";
const Button = ({ children, isGoogleSign, ...otherProps }) => {
  return (
    <div>
      <button
        className={`${isGoogleSign ? "google-sign-in" : ""} custom-button`}
        {...otherProps}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
