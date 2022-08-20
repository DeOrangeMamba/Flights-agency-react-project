import React from "react";
import "./css/card.css";

const Centerp = () => {
  return (
    <div className="first">
      <div className="row">
        <div className="card">
          <div className="image-container">
            <div className="card-content">
              <div className="card-title">
                <h3>About Me</h3>
              </div>
              <div className="card-body">
                <h6>Click here to see my Resume!</h6>
              </div>
              <div className="btn">
                <button className="me-btn">
                  <a class="nav-link " href="http://localhost:3000/Resume">
                    Resume
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="center-img">
            <div className="card-content">
              <div className="card-title">
                <h3>Login</h3>
              </div>
              <div className="card-body">
                <h6>Click here to go to Login page!</h6>
              </div>
              <div className="btn">
                <button>
                  <a class="nav-link " href="http://localhost:3000/Login">
                    Login
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="right-img">
          <div className="card-content">
            <div className="card-title">
              <h3>Flights</h3>
            </div>
            <div className="card-body">
              <p> Searching for the best flight?</p>
            </div>
            <div className="btn">
              <button>
                <a class="nav-link " href="http://localhost:3000/Flights">
                  Flights
                </a>
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Centerp;
