import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState } from "react";
import bg from "../../assets/about1.jpg";

export default function AboutSec3() {
  const history = [
    {
      year: "1999",
      title: "Establishment",
      text: "Our company was established with a vision to provide fresh organic products."
    },
    {
      year: "2003",
      title: "First Success",
      text: "We expanded our services and reached thousands of happy customers."
    },
    {
      year: "2007",
      title: "New Technologies",
      text: "Modern farming technologies improved our product quality."
    },
    {
      year: "2015",
      title: "National Recognition",
      text: "We became one of the leading organic farms in the country."
    },
    {
      year: "2023",
      title: "Partnership",
      text: "We partnered with global organic brands to serve more customers."
    }
  ];

  const [start, setStart] = useState(0);

  const next = () => {
    if (start < history.length - 4) setStart(start + 1);
  };

  const prev = () => {
    if (start > 0) setStart(start - 1);
  };

  return (
    <section
      className="py-5 text-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <Container fluid>

        <h1 className="text-white fw-bold display-3 mb-5">
          OUR HISTORY
        </h1>

        <Row className="justify-content-center g-4">
          {history.slice(start, start + 4).map((item, index) => (
            <Col lg={3} md={6} key={index}>
              <Card className="border-0 shadow bg-white bg-opacity-75 h-100">
                <Card.Body className="p-4">
                  <Card.Title className="fw-bold mb-3">
                    {item.title}
                  </Card.Title>

                  <Card.Text className="text-secondary">
                    {item.text}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="d-flex justify-content-between align-items-center mt-5 px-5">

          <Button
            variant="outline-success"
            onClick={prev}
            disabled={start === 0}
          >
            Prev
          </Button>

          <div className="d-flex gap-5">
            {history.map((item, i) => (
              <div
                key={i}
                className={
                  i >= start && i < start + 4
                    ? "fw-bold text-success"
                    : "text-secondary"
                }
              >
                {item.year}
              </div>
            ))}
          </div>

          <Button
            variant="outline-success"
            onClick={next}
            disabled={start >= history.length - 4}
          >
            Next
          </Button>

        </div>

      </Container>
    </section>
  );
}