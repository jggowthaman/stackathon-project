import React from "react";
import { Container, Carousel, Row, Col, Card } from "react-bootstrap";

import Limg1 from "../../assets/Limg1.webp";
import Limg2 from "../../assets/Limg2.webp";
import Limg3 from "../../assets/Limg3.webp";

export default function Homesec7() {
  const team = [
    {
      name: "JANE SMITH",
      role: "Farm Worker",
      img: Limg1,
    },
    {
      name: "JOHN WILLIAMS",
      role: "Farm Manager",
      img: Limg2,
    },
    {
      name: "KATE MCMILLAN",
      role: "Sales Manager",
      img: Limg3,
    },
    {
      name: "MICHAEL BROWN",
      role: "Farm Worker",
      img: Limg1,
    },
    {
      name: "EMILY DAVIS",
      role: "Marketing Manager",
      img: Limg2,
    },
    {
      name: "ROBERT JOHNSON",
      role: "Supervisor",
      img: Limg3,
    },
  ];

  // Split into groups of 3
  const slides = [];
  for (let i = 0; i < team.length; i += 3) {
    slides.push(team.slice(i, i + 3));
  }

  return (
    <Container fluid className="py-5 bg-light">
      <Container>
        <p className="text-success text-center fst-italic fs-3">
          We are Experienced Farmers
        </p>

        <h1 className="text-center fw-bold display-2 mb-5">
          OUR TEAM
        </h1>

        <Carousel indicators={false} interval={3000}>
          {slides.map((slide, slideIndex) => (
            <Carousel.Item key={slideIndex}>
              <Row className="g-4 justify-content-center">
                {slide.map((member, index) => (
                  <Col lg={4} md={6} sm={12} key={index}>
                    <Card className="border-0 shadow text-center h-100">
                      <Card.Img
                        variant="top"
                        src={member.img}
                        style={{
                          height: "450px",
                          objectFit: "cover",
                        }}
                      />

                      <Card.Body>
                        <h3 className="fw-bold">{member.name}</h3>

                        <p className="text-success fw-semibold">
                          {member.role}
                        </p>

                        <div className="d-flex justify-content-center gap-3 fs-4">
                          <i className="bi bi-facebook"></i>
                          <i className="bi bi-twitter"></i>
                          <i className="bi bi-instagram"></i>
                          <i className="bi bi-google"></i>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </Container>
  );
}