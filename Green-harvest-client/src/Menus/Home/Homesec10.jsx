import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {
  Phone,
  Window,
  Star,
  Lightning,
  ChatQuote,
  Gear,
} from "react-bootstrap-icons";
export default function Homesec10() {
     const features = [
    {
      icon: <Phone size={40} className="text-success" />,
      title: "Responsive & Retina Ready",
      desc: "Farm template offers full responsiveness and perfect compatibility with all display resolutions.",
    },
    {
      icon: <Window size={40} className="text-success" />,
      title: "Advanced UI Kit",
      desc: "Make the pages of your website look more attractive with our new Advanced UI Kit.",
    },
    {
      icon: <Star size={40} className="text-success" />,
      title: "Bootstrap Toolkit",
      desc: "Intuitive and powerful Bootstrap toolkit offers nearly endless website customization possibilities.",
    },
    {
      icon: <Lightning size={40} className="text-success" />,
      title: "Optimized Performance",
      desc: "This template is 100% optimized for fast load speed and increased performance.",
    },
    {
      icon: <ChatQuote size={40} className="text-success" />,
      title: "24/7 Premium Support",
      desc: "Our professional support is always available to help you solve any issues you may have.",
    },
    {
      icon: <Gear size={40} className="text-success" />,
      title: "Highly Customizable",
      desc: "All pages use highly customizable elements that can fully transform the look of your website.",
    },
  ];

  return (
    <Container className="py-5">

      {/* Heading */}

      <p
        className="text-success fw-bold text-center"
        style={{
          fontSize: "28px",
          fontFamily: "cursive",
        }}
      >
        What You Get
      </p>

      <h1 className="text-center fw-bold mb-5">
        Powerful and Highly Useful
        <br />
        Website Functionality
      </h1>

      {/* Cards */}

      <Row className="g-5">

        {features.map((item, index) => (
          <Col lg={4} md={6} sm={12} key={index}>

            <div className="d-flex">

              <div
                className="rounded-circle shadow d-flex justify-content-center align-items-center bg-white"
                style={{
                  width: "90px",
                  height: "90px",
                  minWidth: "90px",
                }}
              >
                {item.icon}
              </div>

              <div className="ms-4">

                <h2
                  className="fw-semibold"
                  style={{ fontSize: "26px" }}
                >
                  {item.title}
                </h2>

                <p
                  className="text-secondary mt-3"
                  style={{
                    lineHeight: "1.8",
                    fontSize: "18px",
                  }}
                >
                  {item.desc}
                </p>

              </div>

            </div>

          </Col>
        ))}

      </Row>

    </Container>
  )
}
