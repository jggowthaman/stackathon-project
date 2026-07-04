import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import "./HeroCarousel.css";
import Orange from "../../assets/orangeimg.jpg"
export default function Homesec2() {
  return (
    <>
     <section className="about-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Image */}
          <Col lg={6}>
            <img
              src={Orange}
              alt="Orange"
              className="img-fluid"
            />
          </Col>

          {/* Right Content */}
          <Col lg={6}>
            <p className="subtitle">A Few Words About Our Farm</p>

            <h1 className="fw-bold display-3 mb-4">ABOUT US</h1>

            <p className="text-secondary fs-5">
              Farm is made up of two certified organic properties, where our
              farmers are constantly growing organic vegetables, crops, and
              fruits of the highest quality in the US.
            </p>

            <div className="d-flex align-items-center mt-4">
              <Button
                variant="warning"
                className="rounded-circle me-3"
                style={{ width: "60px", height: "60px" }}
              >
                →
              </Button>

              <div>
                <h5 className="fw-bold mb-0">SAM WILLIAMS</h5>
                <p className="text-success fst-italic mb-0">
                  Farm Founder
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}
