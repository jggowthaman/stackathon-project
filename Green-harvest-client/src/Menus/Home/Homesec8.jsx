import React from 'react'
import {
  Container,
  Row,
  Col,
  Carousel,
  Accordion,
} from "react-bootstrap";

import SimgS1 from "../../assets/Simg1.webp";
import SimgS2 from "../../assets/Simg2.webp";
import SimgS3 from "../../assets/Simg3.webp";
export default function Homesec8() {
      const products = [
    {
      img: {SimgS1},
      name: "WHITE RICE",
      oldPrice: "$18.00",
      newPrice: "$13.00",
    },
    {
      img: {SimgS2},
      name: "FRESH APPLE",
      oldPrice: "$20.00",
      newPrice: "$15.00",
    },
    {
      img: {SimgS3},
      name: "ORGANIC CORN",
      oldPrice: "$25.00",
      newPrice: "$18.00",
    },
  ];

  return (
    <Container fluid className="py-5 bg-white">
      <Container>
        <Row className="align-items-center">

          {/* Left Side Carousel */}
          <Col lg={6} className="mb-4 mb-lg-0">
           <Carousel controls={false} indicators interval={3000} fade>
  <Carousel.Item>
    <div className="text-center">
      <img
        src={SimgS1}
        alt="Product 1"
        className="img-fluid"
        style={{
          height: "500px",
          width: "100%",
          objectFit: "contain",
        }}
      />

      <h2 className="fw-bold mt-4">WHITE RICE</h2>

      <div className="fs-4">
        <span className="text-muted text-decoration-line-through me-2">
          $18.00
        </span>
        <span className="text-success fw-bold">$13.00</span>
      </div>
    </div>
  </Carousel.Item>

  <Carousel.Item>
    <div className="text-center">
      <img
        src={SimgS2}
        alt="Product 2"
        className="img-fluid"
        style={{
          height: "500px",
          width: "100%",
          objectFit: "contain",
        }}
      />

      <h2 className="fw-bold mt-4">ORGANIC CORN</h2>

      <div className="fs-4">
        <span className="text-muted text-decoration-line-through me-2">
          $22.00
        </span>
        <span className="text-success fw-bold">$17.00</span>
      </div>
    </div>
  </Carousel.Item>

  <Carousel.Item>
    <div className="text-center">
      <img
        src={SimgS3 }
        alt="Product 3"
        className="img-fluid"
        style={{
          height: "500px",
          width: "100%",
          objectFit: "contain",
        }}
      />

      <h2 className="fw-bold mt-4">FRESH APPLE</h2>

      <div className="fs-4">
        <span className="text-muted text-decoration-line-through me-2">
          $20.00
        </span>
        <span className="text-success fw-bold">$15.00</span>
      </div>
    </div>
  </Carousel.Item>
</Carousel>
          </Col>

          {/* Right Side FAQ */}
          <Col lg={6}>
            <p className="text-success fs-3 fst-italic">
              Benefits of Organic Produce
            </p>

            <h1 className="display-2 fw-bold mb-5">
              ORGANIC FOOD FAQ
            </h1>

            <Accordion flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  What does "organic" mean?
                </Accordion.Header>
                <Accordion.Body>
                  Organic food is grown without synthetic
                  fertilizers, pesticides, or genetically
                  modified organisms.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Why eat organic?
                </Accordion.Header>
                <Accordion.Body>
                  Organic food may reduce exposure to
                  pesticide residues and supports
                  environmentally friendly farming.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Is organic food healthier?
                </Accordion.Header>
                <Accordion.Body>
                  Organic foods often contain fewer
                  artificial additives and may have
                  nutritional benefits depending on the
                  product.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>

        </Row>
      </Container>
    </Container>
  )
}
