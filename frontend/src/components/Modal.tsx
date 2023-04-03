import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

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
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Modal;
