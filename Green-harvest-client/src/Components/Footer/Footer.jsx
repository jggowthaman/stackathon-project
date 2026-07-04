import { Container, Row, Col, Form } from "react-bootstrap";
import {
  GeoAltFill,
  TelephoneFill,
  EnvelopeFill,
  Facebook,
  Twitter,
  Instagram,
  Google,
  SendFill,
} from "react-bootstrap-icons";
import logo from "../../assets/green-logo.png";

export default function Footer() {
  return (
    <footer className="bg-white pt-5">
      <Container>
        <Row className="gy-4">

          {/* Logo */}
          <Col lg={4}>
            <img src={logo} alt="logo" width="170" />

            <div className="mt-4">
              <p className="mb-1">
                <strong>Weekdays:</strong> 08:00am - 08:00pm
              </p>

              <p>
                <strong>Weekends:</strong> 10:00am - 06:00pm
              </p>
            </div>

            <hr />

            <div className="d-flex align-items-center gap-3">
              <span className="fw-semibold">Get Social</span>

              <Facebook />
              <Twitter />
              <Instagram />
              <Google />
            </div>
          </Col>

          {/* Contact */}
          <Col lg={4}>
            <h3 className="fw-bold mb-4">CONTACTS</h3>

            <p>
              <GeoAltFill className="text-success me-2" />
              523 Sylvan Ave, 5th Floor
              <br />
              Mountain View, CA 94041 USA
            </p>

            <p>
              <TelephoneFill className="text-success me-2" />
              +1 (844) 123 456 78
            </p>

            <p>
              <EnvelopeFill className="text-success me-2" />
              react-rangers@gmail.com
            </p>
          </Col>

          {/* Newsletter */}
          <Col lg={4}>
            <h3 className="fw-bold mb-4">NEWSLETTER</h3>

            <p className="text-secondary">
              Subscribe to our newsletter to receive weekly
              news, updates, special offers and discounts.
            </p>

            <div className="d-flex align-items-center border-bottom pb-2">
              <Form.Control
                type="email"
                placeholder="Enter your e-mail"
                className="border-0 shadow-none"
              />

              <button
                className="btn btn-warning rounded-circle"
                style={{
                  width: "50px",
                  height: "50px",
                }}
              >
                <SendFill />
              </button>
            </div>
          </Col>

        </Row>
      </Container>

      <div className="bg-light mt-5 py-3">
        <Container>
          <Row className="align-items-center">

            <Col md={4}>
              © 2026 Green Harvest. All rights reserved.
            </Col>

            <Col md={4} className="text-center fw-bold">
              VISA &nbsp;&nbsp; MasterCard &nbsp;&nbsp; PayPal
            </Col>

            <Col md={4} className="text-md-end">
              Privacy Policy
            </Col>

          </Row>
        </Container>
      </div>
    </footer>
  );
}