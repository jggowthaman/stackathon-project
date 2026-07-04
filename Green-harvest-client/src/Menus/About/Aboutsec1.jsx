import { Container } from "react-bootstrap";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import aboutImg from "../../assets/about1.jpg";

export default function Aboutsec1() {
  return (
    <>
      {/* Banner */}
      <section
        className="d-flex align-items-center justify-content-center text-cente "
        style={{
          backgroundImage: `url(${aboutImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "500px",
          position: "relative",
        }}
      >
        {/* Dark Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.35)",
          }}
        ></div>

        {/* Content */}
        <Container style={{ position: "relative", zIndex: 1 }}>
          <h1
            className="text-white fw-bold display-3 mb-5 "
            style={{ letterSpacing: "3px" }}
          >
            ABOUT US
          </h1>

          <p
            className="text-white fs-3 fw-semibold mx-auto"
            style={{ maxWidth: "900px", lineHeight: "1.6" }}
          >
            We are industry-leading organic farm delivering the best products
            that boost your daily life energy and potential.
          </p>
        </Container>
      </section>

      {/* Breadcrumb */}
      <div className="py-5 mx-5">
      <Breadcrumb Breadcrumbtitle='About'/>
      </div>

    </>
  );
}