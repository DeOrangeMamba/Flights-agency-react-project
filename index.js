import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Resume from "./Resume";
import Flights from "./Flights";
import LoveMargo from "./LoveMargo";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="login" element={<Login />} />
        <Route path="Signup" element={<Signup/>}/>
        <Route path="Resume" element={<Resume/>}/>
        <Route path="Flights" element={<Flights/>}/>
        <Route path="LoveMargo" element={<LoveMargo/>}/>







      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

