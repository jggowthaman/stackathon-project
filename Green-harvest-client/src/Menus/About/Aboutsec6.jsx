import { Container, Carousel, Row, Col, Card } from "react-bootstrap";
import { Quote } from "react-bootstrap-icons";

import client1 from "../../assets/about11.jpg";
import client2 from "../../assets/about10.jpg";
import client3 from "../../assets/about8.jpg";
import client4 from "../../assets/about9.jpg";

export default function Aboutsec6() {
  const testimonials = [
    {
      image: client1,
      name: "JANE LEE",
      role: "Client",
      text: "Genetrixs sunt urbss de flavum navis. Magnum paluss ducunt ad urbs. Cum secula favere, omnes assimilationes tractare regius.",
    },
    {
      image: client2,
      name: "JAMES PETERSON",
      role: "Client",
      text: "Zirbus velums, tanquam camerarius byssus. Pol, extum! Abactus varius ausus est. Cum elogium ortum, omnes ignigenaes.",
    },
    {
      image: client3,
      name: "EMILY JOHNSON",
      role: "Customer",
      text: "Organic products are fresh and healthy. Excellent customer service and fast delivery every time.",
    },
    {
      image: client4,
      name: "MICHAEL BROWN",
      role: "Customer",
      text: "Highly recommended! Fresh vegetables and fruits with outstanding quality and affordable prices.",
    },
  ];

  return (
    <section
      className="py-5"
      style={{
        background: "#f9f9f9",
      }}
    >
      <Container>

        <h1 className="text-center fw-bold display-3 mb-5">
          TESTIMONIALS
        </h1>

        <Carousel
          controls={false}
          indicators={true}
          interval={3000}
          pause={false}
        >
          {[0, 2].map((start) => (
            <Carousel.Item key={start}>

              <Row className="g-4">

                {testimonials.slice(start, start + 2).map((item, index) => (

                  <Col lg={6} key={index}>

                    <Card
                      className="border-0 shadow-sm rounded-4 h-100 text-center"
                      style={{
                        minHeight: "400px",
                      }}
                    >
                      <Card.Body className="p-5">

                        <Quote
                          size={70}
                          className="text-success opacity-25 mb-4"
                        />

                        <p
                          className="text-secondary mb-5"
                          style={{
                            fontSize: "22px",
                            lineHeight: "1.8",
                          }}
                        >
                          {item.text}
                        </p>

                        <div className="d-flex justify-content-center align-items-center">

                          <img
                            src={item.image}
                            alt=""
                            className="rounded-circle"
                            style={{
                              width: "70px",
                              height: "70px",
                              objectFit: "cover",
                            }}
                          />

                          <div className="ms-3 text-start">

                            <h5 className="fw-bold mb-1">
                              {item.name}
                            </h5>

                            <h6 className="text-success fst-italic">
                              {item.role}
                            </h6>

                          </div>

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
    </section>
  );
}