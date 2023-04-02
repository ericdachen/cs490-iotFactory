import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Map from "./components/Map";
import Modal from "./components/Modal";
function App() {
  return (
    <div className="App">
      <div style={{ float: "left", marginLeft: "5vw", marginTop: "5vh" }}>
        <h1>Welcome back Eric!</h1>
      </div>
      <br></br>
      <br></br>
      <br></br>
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
    </div>
  );
}

export default App;
