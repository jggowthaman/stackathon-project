import React from 'react'
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Sec6img from "../../assets/Sec6img.jpg"
import Sec6img2 from "../../assets/Sec6img2.jpg"
import Sec6img3 from "../../assets/Sec6img3.jpg"
export default function Homesec6() {
  return (
    <Container fluid className="py-5 bg-light">
      <Container>
        <Row className="g-4">

          {/* Left Large Card */}
          <Col lg={7}>
            <Card className="border-0 shadow h-100">
              <Card.Img
                src={Sec6img}
                height="550"
                style={{ objectFit: "cover" }}
              />

              <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center text-center bg-white bg-opacity-75">
                <h3 className="text-success fst-italic">
                  Deal of the Day
                </h3>

                <h1 className="fw-bold display-3">
                  FOOD BOX
                </h1>

              <h1
  className="fw-bold text-white"
  style={{ fontSize: "10rem" }}
>
  20%
</h1>

                <h2 className="fw-bold">OFF</h2>

                <Button
                  variant="warning"
                  size="lg"
                  className="px-5 py-3 mt-3 fw-bold"
                >
                  SHOP NOW
                </Button>
              </Card.ImgOverlay>
            </Card>
          </Col>

          {/* Right Side */}
          <Col lg={5}>
            <Row className="g-4">

              {/* Top Card */}
              <Col xs={12}>
                <Card className="border-0 shadow">
                  <Card.Img
                    src={Sec6img2}
                    height="260"
                    style={{ objectFit: "cover" }}
                  />

                  <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center text-center bg-white bg-opacity-75">
                    <h5 className="fw-bold">HEALTHY EATING</h5>

                    <h1
  className="fw-bold text-white"
  style={{ fontSize: "4rem" }}
>
  SALE
</h1>

                    <Button
                      variant="success"
                      className="rounded-circle"
                      style={{
                        width: "60px",
                        height: "60px",
                      }}
                    >
                      →
                    </Button>
                  </Card.ImgOverlay>
                </Card>
              </Col>

              {/* Bottom Card */}
              <Col xs={12}>
                <Card className="border-0 shadow">
                  <Card.Img
                    src={Sec6img3}
                    height="260"
                    style={{ objectFit: "cover" }}
                  />

                  <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center text-center bg-white bg-opacity-75">
                    <h1 className="text-danger fw-bold">
                      -50%
                    </h1>

                    <h2 className="fw-bold">
                      VEGETABLES
                    </h2>

                    <Button variant="dark">
                      GET COUPON NOW
                    </Button>
                  </Card.ImgOverlay>
                </Card>
              </Col>

            </Row>
          </Col>

        </Row>
      </Container>
    </Container>    
  )
}
