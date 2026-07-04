import { Container, Carousel, Card, Row, Col } from "react-bootstrap";
import { Facebook, Twitter, Instagram, Google } from "react-bootstrap-icons";

import team1 from "../../assets/about8.jpg";
import team2 from "../../assets/about9.jpg";
import team3 from "../../assets/about10.jpg";
import team4 from "../../assets/about11.jpg";
import team5 from "../../assets/about8.jpg";
import team6 from "../../assets/about9.jpg";

export default function TeamSection() {
  const members = [
    {
      image: team1,
      name: "Rebecca Martinez",
      desc: "Cum zelus mori, omnes repressores desiderium magnum, rusticus medicinaes.",
    },
    {
      image: team2,
      name: "Sam Williams",
      desc: "Cum compater resistere, omnes menses fallere placidus, germanus gemnaes.",
    },
    {
      image: team3,
      name: "Peter Smith",
      desc: "Cum glos manducare, omnes demolitionees experientia clemens, nobilis tritic.",
    },
    {
      image: team4,
      name: "John David",
      desc: "Professional organic farmer with years of farming experience.",
    },
    {
      image: team5,
      name: "Emily Clark",
      desc: "Healthy food specialist and agricultural consultant.",
    },
    {
      image: team6,
      name: "Michael Lee",
      desc: "Expert in modern farming technologies and organic cultivation.",
    },
  ];

  return (
    <section className="py-5 bg-white">
      <Container>

        <h1 className="text-center fw-bold display-4 mb-5">
          OUR TEAM
        </h1>

        <Carousel
          indicators
          controls={false}
          interval={3000}
          pause={false}
          fade
        >
          {[0, 3].map((start) => (
            <Carousel.Item key={start}>
              <Row className="g-4 justify-content-center">

                {members.slice(start, start + 3).map((member, index) => (
                  <Col lg={4} md={6} key={index}>
                    <Card className="border-0 text-center">

                      <Card.Img
                        variant="top"
                        src={member.image}
                        style={{
                          height: "380px",
                          objectFit: "cover",
                        }}
                      />

                      <Card.Body>

                        <h2
                          className="fw-bold mt-3"
                          style={{
                            fontSize: "36px",
                            letterSpacing: "2px",
                          }}
                        >
                          {member.name}
                        </h2>

                        <div
                          className="mx-auto mb-3"
                          style={{
                            width: "160px",
                            height: "3px",
                            background: "#d4c500",
                          }}
                        ></div>

                        <p className="text-secondary">
                          {member.desc}
                        </p>

                        <div className="d-flex justify-content-center gap-4 fs-4">
                          <Facebook />
                          <Twitter />
                          <Instagram />
                          <Google />
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