import React from 'react'
import "./HeroCarousel.css";
import Carousel from "react-bootstrap/Carousel";
export default function Homecarosol() {
  return (
     <>
        <Carousel controls indicators={false} fade>
         <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854"
          alt="Farm"
        />

        <Carousel.Caption className="hero-content">
          <p className="welcome-text">Welcome to Our Farm</p>
          <h1>PRODUCTS</h1>
          <h2>GROWN WITH LOVE</h2>
          <button className="shop-btn">SHOP NOW</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://images.unsplash.com/photo-1464226184884-fa280b87c399"
          alt="Farm"
        />

        <Carousel.Caption className="hero-content">
          <p className="welcome-text">Fresh Organic Foods</p>
          <h1>VEGETABLES</h1>
          <h2>100% NATURAL</h2>
          <button className="shop-btn">SHOP NOW</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  
  )
}
