import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/Footer.css";
import {Container} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook , faInstagram} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className="foot-foot">


      <Container>
        <h1 className="text-center"> Contact us</h1>
        <div className="social-media-icons-white d-flex justify-content-evenly">
          <a href="https://www.facebook.com/jonathan.margoninski.1">
            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
          </a>
          <a href="https://www.instagram.com/jonathan_marg/">
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
          </a>
        </div>
      </Container>


    </div>
  );
};

export default Footer;
