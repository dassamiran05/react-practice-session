import React from "react";

const Button = () => {
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <button
        className="btn btn-primary"
        onClick={() => alert("Button clicked!")}
      >
        Click Me
      </button>
    </div>
  );
};

export default Button;
