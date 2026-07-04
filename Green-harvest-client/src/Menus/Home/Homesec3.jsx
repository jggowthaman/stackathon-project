import React from 'react'
import "./HeroCarousel.css";
import { Container, Row, Col } from "react-bootstrap";
import { Basket, Flower1, Tree, HouseDoor } from "react-bootstrap-icons";
export default function Homesec3() {
    const features = [
    {
      number: "01",
      icon: <Basket />,
      title: "ALWAYS FRESH",
      text: "Thanks to innovative organic technologies, our products are always fresh and don't need any treatment.",
    },
    {
      number: "02",
      icon: <Flower1 />,
      title: "100% ORGANIC",
      text: "We adhere to our organic philosophy, which implies avoiding pesticides and non-organic fertilizers.",
    },
    {
      number: "03",
      icon: <Tree />,
      title: "NO ADDITIVES",
      text: "We avoid any artificial additives after harvesting the crops to offer you the best organic products.",
    },
    {
      number: "04",
      icon: <HouseDoor />,
      title: "MODERN FARM",
      text: "Though we rely on traditional organic farming a lot, we also use the latest farming innovations.",
    },
  ];

  return (
    <section className="feature-section">
      <Container>
        <Row>
          {features.map((item, index) => (
            <Col lg={3} md={6} key={index} className="mb-4">
              <div className="feature-card">
                <span className="feature-number">{item.number}</span>

                <div className="feature-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
