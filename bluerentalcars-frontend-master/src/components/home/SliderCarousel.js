import React from "react";
import { Carousel } from "react-bootstrap";
import sliderList from "../../data/sliderList";

const SliderCarousel = () => {
  return (
    <Carousel indicators={false} variant="dark">
      {sliderList.map((slider) => (
        <Carousel.Item key={slider.id}>
          <img
            className="d-block w-100"
            src={slider.image}
            alt={slider.title}
          />
          <Carousel.Caption>
            <h3> {slider.title} </h3>
            <p className="d-none d-lg-block"> {slider.description} </p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default SliderCarousel;

//! 7. satırda ki "indicators={false}" Fot ların altındaki --- slider çizgilerinin silinmesini sağlar...
//* variant="dark" slider da ki "< >" iaşretlerinin siyah görünmesini sağladı...
//TODO <p className="d-none d-lg-block">{slider.description}</p> Küçük ekranda açıklama gizlemek için yapıldı.

//? {sliderList.map((slider)  => (
//?   <Carousel.Item key={slider.id} data dosyasındaki sliderList bilgilerinden dönmesini sağlıyoruz.
