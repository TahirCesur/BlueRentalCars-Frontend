import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SliderCarousel from "./SliderCarousel";
import SliderForm from "./SliderForm";

const Slider = () => {
  return (
    <div className="slider">
      <Container>
        <Row>
          <Col lg={{ span: 7, order: "last" }}>
            <SliderCarousel />
          </Col>
          <Col lg={{ span: 5, order: "first" }}>
            <SliderForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Slider;

//! Notlar

//? xs-- en küçük ekranlarda
//? md-- middle orta ekranlarda
//? lg-- en büyük ekranlarda

//* <Col lg={{span:7, order:"last"}}> order last yaptığımızda Büyük ekranda en sağda görünecek carousel
//* Küçük ekranda ise en önde carousel görünecek demektir...

//! <Col lg={{span:5, order:"first"}}> order first yaptığımızda ise büyük ekranda en solda görünecek...
//! Küçük ekranda ise en altta görünecek...
