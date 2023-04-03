import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Map from "./components/Map";
import DashBoard from "./components/Dashboard";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <div style={{ float: "left", marginLeft: "5vw", marginTop: "5vh" }}>
        <h1>
          Welcome back{" "}
          <span
            style={{
              color: "#385FE9",
            }}
          >
            {" "}
            Eric
          </span>
          !
        </h1>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Map />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div style={{ float: "left", marginLeft: "5vw", marginTop: "5vh" }}>
        <h1>Dashboard</h1>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div
        style={{
          marginLeft: "10vw",
          width: "80vw",
        }}
      >
        <DashBoard />
        <br></br>
        <br></br>
        <a href="report.pdf">
          <div className="d-grid gap-2">
            <Button size="lg" variant="dark">
              Generate Usage Report
            </Button>
          </div>
        </a>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default App;
