import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Modal() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        style={{
          position: "absolute",
          height: "100vh",
          width: "100vw",
          backgroundColor: "black",
          opacity: "0.4",
          zIndex: "1",
          marginTop: "-200px",
        }}
      >
        <h1></h1>
      </div>
      <div
        style={{
          position: "absolute",
          height: "80vh",
          width: "80vw",
          color: "black",
          backgroundColor: "white",
          marginTop: "-12vh",
          marginLeft: "10vw",
          zIndex: "100",
          borderRadius: "35px",
        }}
      >
        <h3>X</h3>
      </div>
    </>
  );
}

export default Modal;
