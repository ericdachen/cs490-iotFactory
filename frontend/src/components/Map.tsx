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
  const [livingOne, setLivingOne] = useState(false);
  const [kitchenOne, setKitchenOne] = useState(true);
  const [kitchenTwo, setKitchenTwo] = useState(true);
  const [studyOne, setStudyOne] = useState(true);
  const [studyTwo, setStudyTwo] = useState(false);

  const handleCloseLiving = () => setShowLiving(false);
  const handleShowLiving = () => setShowLiving(true);
  const handleCloseKitchen = () => setShowKitchen(false);
  const handleShowKitchen = () => setShowKitchen(true);
  const handleCloseStudy = () => setShowStudy(false);
  const handleShowStudy = () => setShowStudy(true);
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
            Your{" "}
            <span
              style={{
                color: "#385FE9",
              }}
            >
              Living Room
            </span>
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
                  {livingOne ? (
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
                    0.42KW/H{" "}
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
                {livingOne ? (
                  <Button
                    variant="primary"
                    onClick={() => {
                      setLivingOne(!livingOne);
                    }}
                  >
                    Turn OFF
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    onClick={() => {
                      setLivingOne(!livingOne);
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
      <Modal show={showKitchen} onHide={handleCloseKitchen} centered size="xl">
        <Modal.Body>
          <h1
            style={{
              marginTop: "1vh",
              marginLeft: "1vw",
            }}
          >
            Your{" "}
            <span
              style={{
                color: "#385FE9",
              }}
            >
              Kitchen
            </span>
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
                marginRight: "0vw",
                marginBottom: "1vh",
                float: "left",
              }}
            >
              <Card.Img variant="top" src="bistro.jpg" />
              <Card.Body>
                <Card.Title>Phillips Bistro Lights</Card.Title>
                <Card.Text>
                  Status:{" "}
                  {kitchenOne ? (
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
                    3.25KW/H{" "}
                  </span>
                </Card.Text>
                <Card.Text
                  style={{
                    padding: "0",
                    marginTop: "-15px",
                  }}
                >
                  Location: Kitchen
                </Card.Text>
                <Card.Text
                  style={{
                    padding: "0",
                    marginTop: "-15px",
                  }}
                >
                  ID: 1859283759
                </Card.Text>
                {kitchenOne ? (
                  <Button
                    variant="primary"
                    onClick={() => {
                      setKitchenOne(!kitchenOne);
                    }}
                  >
                    Turn OFF
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    onClick={() => {
                      setKitchenOne(!kitchenOne);
                    }}
                  >
                    Turn ON
                  </Button>
                )}
              </Card.Body>
            </Card>
            <Card
              style={{
                width: "18rem",
                marginLeft: "5vw",
                marginTop: "5vh",
                marginRight: "5vw",
                marginBottom: "1vh",
                float: "left",
              }}
            >
              <Card.Img variant="top" src="barlight.png" />
              <Card.Body>
                <Card.Title>Phillips Bar Light</Card.Title>
                <Card.Text>
                  Status:{" "}
                  {kitchenTwo ? (
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
                    5.28KW/H{" "}
                  </span>
                </Card.Text>
                <Card.Text
                  style={{
                    padding: "0",
                    marginTop: "-15px",
                  }}
                >
                  Location: Kitchen
                </Card.Text>
                <Card.Text
                  style={{
                    padding: "0",
                    marginTop: "-15px",
                  }}
                >
                  ID: 03844738223
                </Card.Text>
                {kitchenTwo ? (
                  <Button
                    variant="primary"
                    onClick={() => {
                      setKitchenTwo(!kitchenTwo);
                    }}
                  >
                    Turn OFF
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    onClick={() => {
                      setKitchenTwo(!kitchenTwo);
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
          <Button variant="secondary" onClick={handleCloseKitchen}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseKitchen}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showStudy} onHide={handleCloseStudy} centered size="xl">
        <Modal.Body>
          <h1
            style={{
              marginTop: "1vh",
              marginLeft: "1vw",
            }}
          >
            Your{" "}
            <span
              style={{
                color: "#385FE9",
              }}
            >
              Study
            </span>
          </h1>
          <div
            style={{
              display: "inline-block",
            }}
          >
            <Card
              style={{
                width: "18rem",
                marginLeft: "5vw",
                marginTop: "5vh",
                marginRight: "0vw",
                marginBottom: "5vw",
                float: "left",
              }}
            >
              <Card.Img variant="top" src="lightbulb.png" />
              <Card.Body>
                <Card.Title>Phillips Hue Lightbulb</Card.Title>
                <Card.Text>
                  Status:{" "}
                  {studyOne ? (
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
                    0.43KW/H{" "}
                  </span>
                </Card.Text>
                <Card.Text
                  style={{
                    padding: "0",
                    marginTop: "-15px",
                  }}
                >
                  Location: Study
                </Card.Text>
                <Card.Text
                  style={{
                    padding: "0",
                    marginTop: "-15px",
                  }}
                >
                  ID: 6539392013
                </Card.Text>
                {studyOne ? (
                  <Button
                    variant="primary"
                    onClick={() => {
                      setStudyOne(!studyOne);
                    }}
                  >
                    Turn OFF
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    onClick={() => {
                      setStudyOne(!studyOne);
                    }}
                  >
                    Turn ON
                  </Button>
                )}
              </Card.Body>
            </Card>
            <Card
              style={{
                width: "18rem",
                marginLeft: "5vw",
                marginTop: "5vh",
                marginRight: "2vw",
                marginBottom: "5vw",
                float: "left",
              }}
            >
              <Card.Img variant="top" src="lightbulb.png" />
              <Card.Body>
                <Card.Title>Phillips Hue Lightbulb</Card.Title>
                <Card.Text>
                  Status:{" "}
                  {studyTwo ? (
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
                    0.42KW/H{" "}
                  </span>
                </Card.Text>
                <Card.Text
                  style={{
                    padding: "0",
                    marginTop: "-15px",
                  }}
                >
                  Location: Study
                </Card.Text>
                <Card.Text
                  style={{
                    padding: "0",
                    marginTop: "-15px",
                  }}
                >
                  ID: 9457295722
                </Card.Text>
                {studyTwo ? (
                  <Button
                    variant="primary"
                    onClick={() => {
                      setStudyTwo(!studyTwo);
                    }}
                  >
                    Turn OFF
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    onClick={() => {
                      setStudyTwo(!studyTwo);
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
          <Button variant="secondary" onClick={handleCloseStudy}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseStudy}>
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
          backgroundColor: "white",
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
          backgroundColor: "white",
          opacity: "0.1",
          height: "22vh",
          width: "12vw",
        }}
        onClick={handleShowKitchen}
      ></div>
      {/* Study */}
      <div
        style={{
          position: "absolute",
          marginLeft: "26vw",
          marginTop: "-25vh",
          backgroundColor: "white",
          opacity: "0.1",
          height: "22vh",
          width: "12vw",
        }}
        onClick={handleShowStudy}
      ></div>
    </div>
  );
}

export default Map;
