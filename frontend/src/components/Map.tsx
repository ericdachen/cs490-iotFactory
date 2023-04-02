import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Button from "react-bootstrap/Button";
import Modal from "./Modal";

function Map() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      {show ? <Modal /> : <></>}
      <img
        src="Map.png"
        style={{
          height: "70vh",
          width: "60vw",
        }}
      ></img>
      {/* Bedroom */}
      <div
        style={{
          position: "absolute",
          marginLeft: "320px",
          marginTop: "-560px",
          backgroundColor: "yellow",
          opacity: "0.1",
          height: "22vh",
          width: "12vw",
        }}
        onClick={handleShow}
      ></div>
      {/* Kitchen */}
      <div
        style={{
          position: "absolute",
          marginLeft: "800px",
          marginTop: "-400px",
          backgroundColor: "yellow",
          opacity: "0.1",
          height: "22vh",
          width: "12vw",
        }}
      ></div>
      {/* Study */}
      <div
        style={{
          position: "absolute",
          marginLeft: "400px",
          marginTop: "-200px",
          backgroundColor: "yellow",
          opacity: "0.1",
          height: "22vh",
          width: "12vw",
        }}
      ></div>
    </div>
  );
}

export default Map;
