import { Container, Row, Col } from "react-bootstrap";

import logo1 from "../../assets/l1.webp";
import logo2 from "../../assets/l2.webp";
import logo3 from "../../assets/l3.webp";
import logo4 from "../../assets/l4.webp";
import logo5 from "../../assets/l5.webp";

export default function Aboutsec7() {
  const logos = [logo1, logo2, logo3, logo4, logo5];

  return (
    <section className="py-5 bg-white">
      <Container>

        <Row className="justify-content-center align-items-center text-center">

          {logos.map((logo, index) => (
            <Col
              lg={2}
              md={4}
              sm={6}
              xs={6}
              className="mb-4"
              key={index}
            >
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="img-fluid"
                style={{
                  maxHeight: "140px",
                  width: "auto",
                  transition: "0.3s",
                  cursor: "pointer",
                }}
                onMouseOver={(e) =>
                  (e.target.style.transform = "scale(1.1)")
                }
                onMouseOut={(e) =>
                  (e.target.style.transform = "scale(1)")
                }
              />
            </Col>
          ))}

        </Row>

      </Container>
    </section>
  );
}