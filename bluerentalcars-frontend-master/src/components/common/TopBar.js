import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FiFacebook,
  FiInstagram,
  FiPhoneCall,
  FiTwitter,
  FiUser,
  FiYoutube,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="topbar">
      <Container>
        <Row>
          <Col xs={7}>
            <FiPhoneCall size={16} />{" "}
            <span className="d-none d-md-inline">CALL US</span> +1 235 98 95
          </Col>
          <Col xs={5}>
            <ul>
              <li className="d-none d-md-block">
                <FiYoutube />
              </li>
              <li className="d-none d-md-block">
                <FiFacebook />
              </li>
              <li className="d-none d-md-block">
                <FiTwitter />
              </li>
              <li className="d-none d-md-block">
                <FiInstagram />
              </li>
              <li>
                <Button as={Link} size="sm" to="/login">
                  <FiUser /> Login
                </Button>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBar;

//?  <span className="d-none d-md-inline">CALL US</span> +1 235 98 95
/* CALL US yazısını span e alıp numaradan ayırdık ki ekran küçüldükçe Call us yazısı kaybolsun..*/
//* <li className="d-none d-md-block"> icon lar sayfa küçülünce kaybolsun diye yaptık..

//! <Button size="sm"> login butonu küçük olsun diye...
