import React from "react";
import ReactDOM from "react-dom/client";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function DashBoard() {
  return (
    <>
      <div>
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card
              style={{
                height: "70vh",
              }}
            >
              <div className="circle-wrap">
                <div className="circle">
                  <div className="mask full">
                    <div className="fill"></div>
                  </div>

                  <div className="mask half">
                    <div className="fill"></div>
                  </div>
                  <div className="inside-circle">75%</div>
                </div>
              </div>
              <Card.Body>
                <Card.Title
                  style={{
                    fontSize: "2em",
                  }}
                >
                  A large percentage of your electricity consumption is being
                  consumed in your Kitchen!
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{
                height: "70vh",
              }}
            >
              <div className="circle-wrap-two">
                <div className="circle">
                  <div className="mask full">
                    <div className="fill"></div>
                  </div>

                  <div className="mask half">
                    <div className="fill"></div>
                  </div>
                  <div className="inside-circle">!</div>
                </div>
              </div>
              <Card.Body>
                <Card.Title
                  style={{
                    fontSize: "2em",
                  }}
                >
                  We noticed an increase in usage in the Study Area compared to
                  last year!
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{
                height: "70vh",
              }}
            >
              <div className="circle-wrap-three">
                <div className="circle">
                  <div className="mask full">
                    <div className="fill"></div>
                  </div>

                  <div className="mask half">
                    <div className="fill"></div>
                  </div>
                  <div className="inside-circle">80%</div>
                </div>
              </div>
              <Card.Body>
                <Card.Title
                  style={{
                    fontSize: "2em",
                  }}
                >
                  You reduced your consumption by a significant amount compared
                  to last quarter
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default DashBoard;
