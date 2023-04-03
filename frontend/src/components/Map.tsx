import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";

function Map() {
  const [showLiving, setShowLiving] = useState(false);
  const [showKitchen, setShowKitchen] = useState(false);
  const [showStudy, setShowStudy] = useState(false);
  const [firstOn, setFirstOn] = useState(true);

  const handleCloseLiving = () => setShowLiving(false);
  const handleShowLiving = () => setShowLiving(true);
  const handleCloseKitchen = () => setShowLiving(false);
  const handleShowKitchen = () => setShowLiving(true);
  const handleCloseStudy = () => setShowLiving(false);
  const handleShowStudy = () => setShowLiving(true);
  return (
    <div>
      <Modal show={showLiving} onHide={handleCloseLiving} centered size="xl">
        <Modal.Body>
          <h1
            style={{
              marginTop: "1vh",
              marginLeft: "1vw",
            }}
          >
            Your Living Room
          </h1>
          <div
            style={{
              float: "left",
            }}
          >
            <Card
              style={{
                width: "18rem",
                marginLeft: "5vw",
                marginTop: "5vh",
                marginRight: "5vw",
                marginBottom: "5vw",
              }}
            >
              <Card.Img variant="top" src="lightbulb.png" />
              <Card.Body>
                <Card.Title>Phillips Hue Lightbulb</Card.Title>
                <Card.Text>
                  Status:{" "}
                  {firstOn ? (
                    <span
                      style={{
                        color: "green",
                      }}
                    >
                      {" "}
                      ON{" "}
                    </span>
                  ) : (
                    <span
                      style={{
                        color: "red",
                      }}
                    >
                      {" "}
                      OFF{" "}
                    </span>
                  )}
                </Card.Text>
                <Card.Text
                  style={{
                    padding: "0",
                    marginTop: "-15px",
                  }}
                >
                  Energy Consumption:{" "}
                  <span
                    style={{
                      color: "#FAC300",
                    }}
                  >
                    {" "}
                    12KW/H{" "}
                  </span>
                </Card.Text>
                <Card.Text
                  style={{
                    padding: "0",
                    marginTop: "-15px",
                  }}
                >
                  Location: Living Room
                </Card.Text>
                <Card.Text
                  style={{
                    padding: "0",
                    marginTop: "-15px",
                  }}
                >
                  ID: 2081294871
                </Card.Text>
                {firstOn ? (
                  <Button
                    variant="primary"
                    onClick={() => {
                      setFirstOn(!firstOn);
                    }}
                  >
                    Turn OFF
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    onClick={() => {
                      setFirstOn(!firstOn);
                    }}
                  >
                    Turn ON
                  </Button>
                )}
              </Card.Body>
            </Card>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLiving}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseLiving}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
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
          marginLeft: "20vw",
          marginTop: "-65vh",
          backgroundColor: "yellow",
          opacity: "0.1",
          height: "22vh",
          width: "12vw",
        }}
        onClick={handleShowLiving}
      ></div>
      {/* Kitchen */}
      <div
        style={{
          position: "absolute",
          marginLeft: "52vw",
          marginTop: "-50vh",
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
          marginLeft: "26vw",
          marginTop: "-25vh",
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
