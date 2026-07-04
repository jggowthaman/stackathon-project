import { Container, Row, Col } from "react-bootstrap";
import bg from "../../assets/about12.jpg";

export default function Aboutsec5() {
  const stats = [
    {
      number: "245",
      title: "Vegetables",
      subtitle: "and fruits",
    },
    {
      number: "382",
      title: "Reliable",
      subtitle: "partners",
    },
    {
      number: "1267",
      title: "Satisfied",
      subtitle: "customers",
    },
    {
      number: "474",
      title: "New blog",
      subtitle: "articles",
    },
  ];

  return (
    <section
      className="py-5 position-relative"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: "rgba(170,180,190,0.55)",
        }}
      ></div>

      <Container className="position-relative">
        <Row className="text-center py-5">

          {stats.map((item, index) => (
            <Col lg={3} md={6} sm={6} className="mb-4" key={index}>

              <h1
                className="fw-bold text-white"
                style={{
                  fontSize: "72px",
                }}
              >
                {item.number}
              </h1>

              <div
                className="mx-auto my-3"
                style={{
                  width: "55px",
                  height: "2px",
                  background: "#fff",
                }}
              ></div>

              <h3
                className="text-white fw-bold"
                style={{
                  fontSize: "28px",
                }}
              >
                {item.title}
              </h3>

              <h3
                className="text-white fw-bold"
                style={{
                  fontSize: "28px",
                }}
              >
                {item.subtitle}
              </h3>

            </Col>
          ))}

        </Row>
      </Container>
    </section>
  );
}