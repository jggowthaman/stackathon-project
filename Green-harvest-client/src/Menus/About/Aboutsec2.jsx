import { Container, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

import img1 from "../../assets/about2.jpg";
import img2 from "../../assets/about3.jpg";
import img3 from "../../assets/about4.jpg";
import img4 from "../../assets/about5.jpg";
import img5 from "../../assets/about6.jpg";

export default function AboutSec2() {
  const images = [img1, img2, img3, img4, img5];

  const [mainImage, setMainImage] = useState(img5);

  // Auto change every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setMainImage((prev) => {
        const current = images.indexOf(prev);
        const next = (current + 1) % images.length;
        return images[next];
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  // Thumbnails except selected image
  const thumbnails = images.filter((img) => img !== mainImage);

  return (
    <section className="py-5">
      <Container>
        <Row className="align-items-center">

          {/* Left Side */}
          <Col lg={5}>
            <h1 className="fw-bold display-5 mb-4">
              <span className="text-success me-2">❝</span>
              NEW GENERATION
              <br />
              OF FARMERS
            </h1>

            <div className="d-flex justify-content-between border-bottom mb-4">
              <h6 className="text-success border-bottom border-success border-3 pb-2">
                ABOUT
              </h6>

              <h6 className="text-secondary">OUR MISSION</h6>

              <h6 className="text-secondary">OUR GOALS</h6>
            </div>

            <p className="text-secondary">
              Cum nomen prarere, omnes peses amor pius, rusticus
              racanaes. Ubi est mirabilis gemna? Cum gabalium velum,
              omnes fugaes.
            </p>

            <p className="text-secondary">
              Ubi est peritus devatio? A falsis, adelphis peritus
              apolloniates. Est raptus clabulare, cesaris.
            </p>

            <Button variant="success" className="px-5 py-3 my-3">
              READ MORE
            </Button>
          </Col>

          {/* Right Side */}
          <Col lg={7}>

            {/* Main Image */}
            <img
              src={mainImage}
              alt=""
              className="img-fluid rounded shadow w-100 mb-3"
              style={{
                height: "430px",
                objectFit: "cover",
              }}
            />

            {/* Thumbnails */}
            <Row className="g-3">
              {thumbnails.map((img, index) => (
                <Col xs={3} key={index}>
                  <img
                    src={img}
                    alt=""
                    className="img-fluid rounded"
                    style={{
                      height: "95px",
                      width: "100%",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                    onClick={() => setMainImage(img)}
                  />
                </Col>
              ))}
            </Row>

          </Col>

        </Row>
      </Container>
    </section>
  );
}