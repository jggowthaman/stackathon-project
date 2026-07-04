import React from 'react'
import { Container, Carousel, Card, Image } from "react-bootstrap";

export default function Homesec5() {
  return (
   <Container fluid className="bg-light py-5">
      <Container>
        <h1 className="text-center fw-bold display-2 mb-5">
          OUR CLIENTS
        </h1>

        <Carousel indicators={false}>
          <Carousel.Item>
            <Card
              className="mx-auto shadow border-0 rounded-5"
              style={{ maxWidth: "850px" }}
            >
              <Card.Body className="text-center p-5">
                <h1 className="text-success opacity-25">❝</h1>

                <p className="fs-4 text-secondary">
                  I picked up a head of your lettuce at a local grocery store
                  today. What an amazing and beautiful lettuce it is! I've
                  never seen another so full and green and tempting.
                </p>

                <div className="d-flex justify-content-center align-items-center gap-3 mt-4 flex-column flex-md-row">
                  <Image
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    roundedCircle
                    width={70}
                    height={70}
                  />

                  <div>
                    <h5 className="fw-bold mb-0">
                      BILL MCMILLAN
                    </h5>
                    <span className="text-success fst-italic">
                      Client
                    </span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Carousel.Item>

          <Carousel.Item>
            <Card
              className="mx-auto shadow border-0 rounded-5"
              style={{ maxWidth: "850px" }}
            >
              <Card.Body className="text-center p-5">
                <h1 className="text-success opacity-25">❝</h1>

                <p className="fs-4 text-secondary">
                  Fresh vegetables and fruits every week. Excellent quality
                  and customer service.
                </p>

                <div className="d-flex justify-content-center align-items-center gap-3 mt-4 flex-column flex-md-row">
                  <Image
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    roundedCircle
                    width={70}
                    height={70}
                  />

                  <div>
                    <h5 className="fw-bold mb-0">
                      SARAH JOHNSON
                    </h5>
                    <span className="text-success fst-italic">
                      Client
                    </span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Carousel.Item>

          <Carousel.Item>
            <Card
              className="mx-auto shadow border-0 rounded-5"
              style={{ maxWidth: "850px" }}
            >
              <Card.Body className="text-center p-5">
                <h1 className="text-success opacity-25">❝</h1>

                <p className="fs-4 text-secondary">
                  Best organic products. Everything is fresh and delivered
                  on time.
                </p>

                <div className="d-flex justify-content-center align-items-center gap-3 mt-4 flex-column flex-md-row">
                  <Image
                    src="https://randomuser.me/api/portraits/men/55.jpg"
                    roundedCircle
                    width={70}
                    height={70}
                  />

                  <div>
                    <h5 className="fw-bold mb-0">
                      DAVID SMITH
                    </h5>
                    <span className="text-success fst-italic">
                      Client
                    </span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>
      </Container>
    </Container>
  )
}
