import React, { useEffect , useState } from 'react'
import "./css/styles.css";
import "./css/card.css";
import "./css/flight.css";
import Flightsheader from "./Flightsheader";
import jwt_decode from "jwt-decode";
import Flightfooter from "./Flightfooter";
import Footer from "./Footer";
import jwtDecode from 'jwt-decode';
const Flights = () => {
  const URL = "https://127.0.0.1:8000/Flight"
  const [flights, setFlights] = useState([])
  useEffect (() =>{
    const Data = async () => {
      let res = await fetch(URL).then(response => response.json())
      setFlights(res)
    } 
    Data()
  },[])

  return (      
    <div>
      {flights.Airline_Company_Id}
      {flights.Origin_Country_Id}
      {flights.Destination_Country_Id}
      {flights.Departure_Time}
      {flights.Landing_Time}
      {flights.Remaining_Tickets}
      <Flightsheader />
      
      <div className="all-cards">
        <div className="cards">
          <div className="row">
            <div className="flight-card">
              <div className="content-flight">
                <div className="title-flight">
                  <h4>London</h4>
                  <p>
                    <h3>England</h3>
                    Weather : cloudy<br></br>
                    Lengh : 5h 20m <br></br>
                    Price : 97$
                  </p>
                </div>
                <br></br>
                <div className="row">
                  <button className="flight-btn">Submit v</button>
                  <button className="flightx-btn">Decline x</button>
                </div>
              </div>
            </div>
            <div className="flight-card">
              <div className="content-flight">
                <div className="title-flight">
                  <h4>Amsterdam</h4>
                  <p>
                    <h3>Nederland</h3>
                    Weather : cloudy<br></br>
                    Lengh : 5h <br></br>
                    Price : 120$
                  </p>
                </div>
                <br></br>
                <div className="row">
                  <button className="flight-btn">Submit v</button>
                  <button className="flightx-btn">Decline x</button>
                </div>
              </div>
            </div>
            <div className="flight-card">
              <div className="content-flight">
                <div className="title-flight">
                  <h4>Paris</h4>
                  <p>
                    <h3>France</h3>
                    Weather : Sunny<br></br>
                    Lengh : 4h 55m <br></br>
                    Price : 88$
                  </p>
                </div>
                <br></br>
                <div className="row">
                  <button className="flight-btn">Submit v</button>
                  <button className="flightx-btn">Decline x</button>
                </div>
              </div>
            </div>
            <div className="flight-card">
              <div className="content-flight">
                <div className="title-flight">
                  <h4>Madrid</h4>
                  <p>
                    <h3>Spain</h3>
                    Weather : Sunny<br></br>
                    Lengh : 5h 20m <br></br>
                    Price : 95$
                  </p>
                </div>
                <br></br>
                <div className="row">
                  <button className="flight-btn">Submit v</button>
                  <button className="flightx-btn">Decline x</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="row">
            <div className="flight-card">
              <div className="content-flight">
                <div className="title-flight">
                  <h4>Tokyo</h4>
                  <p>
                    <h3>Japan</h3>
                    Weather : cloudy<br></br>
                    Lengh : 15h 25m <br></br>
                    Price : 345$
                  </p>
                </div>
                <br></br>
                <div className="row">
                  <button className="flight-btn">Submit v</button>
                  <button className="flightx-btn">Decline x</button>
                </div>
              </div>
            </div>
            <div className="flight-card">
              <div className="content-flight">
                <div className="title-flight">
                  <h4>Canberra</h4>
                  <p>
                    <h3> Australia</h3>
                    Weather : Cold<br></br>
                    Lengh : 22h 45m <br></br>
                    Price : 104$
                  </p>
                </div>
                <br></br>
                <div className="row">
                  <button className="flight-btn">Submit v</button>
                  <button className="flightx-btn">Decline x</button>
                </div>
              </div>
            </div>
            <div className="flight-card">
              <div className="content-flight">
                <div className="title-flight">
                  <h4>Buenos Aires</h4>
                  <p>
                    <h3>Argentina</h3>
                    Weather : Sunny<br></br>
                    Lengh : 19h 30m <br></br>
                    Price : 224$
                  </p>
                </div>
                <br></br>
                <div className="row">
                  <button className="flight-btn">Submit v</button>
                  <button className="flightx-btn">Decline x</button>
                </div>
              </div>
            </div>
            <div className="flight-card">
              <div className="content-flight">
                <div className="title-flight">
                  <h4>Ottawa</h4>
                  <p>
                    <h3>Canada</h3>
                    Weather : Cold<br></br>
                    Lengh : 13h 43m <br></br>
                    Price : 213$
                  </p>
                </div>
                <br></br>
                <div className="row">
                  <button className="flight-btn">Submit v</button>
                  <button className="flightx-btn">Decline x</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Flights;


