import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [userinfo, setUserinfo] = useState({
    uname: "",
    uemail: "",
    umobile: "",
    uepassword: "",
    ucpassword: "",
  });

  const [err, setErr] = useState({});

  // Handle Input Change
  const changingdata = (e) => {
    const { name, value } = e.target;

    setUserinfo((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErr((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // Validation
  const myvalidation = () => {
    let temperr = {};

    // Name
    if (!userinfo.uname.trim()) {
      temperr.uname = "Please enter your name";
    } else if (userinfo.uname.length < 3) {
      temperr.uname = "Name must be at least 3 characters";
    }

    // Email
    const emailPattern =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!userinfo.uemail.trim()) {
      temperr.uemail = "Please enter your email";
    } else if (!emailPattern.test(userinfo.uemail)) {
      temperr.uemail = "Enter a valid email";
    }

    // Mobile
    const mobilePattern = /^[6-9][0-9]{9}$/;

    if (!userinfo.umobile.trim()) {
      temperr.umobile = "Please enter mobile number";
    } else if (!mobilePattern.test(userinfo.umobile)) {
      temperr.umobile = "Enter a valid mobile number";
    }

    // Password
    if (!userinfo.uepassword.trim()) {
      temperr.uepassword = "Please enter password";
    } else if (userinfo.uepassword.length < 6) {
      temperr.uepassword = "Password must be at least 6 characters";
    }

    // Confirm Password
    if (!userinfo.ucpassword.trim()) {
      temperr.ucpassword = "Confirm your password";
    } else if (userinfo.ucpassword !== userinfo.uepassword) {
      temperr.ucpassword = "Passwords do not match";
    }

    setErr(temperr);

    return Object.keys(temperr).length === 0;
  };

  // Submit
const formdatasave = async (e) => {
  e.preventDefault();

  if (myvalidation()) {
    try {
      await axios.post("http://localhost:4040/signup", {
        uname: userinfo.uname,
        uemail: userinfo.uemail,
        umobile: userinfo.umobile,
        uepassword: userinfo.uepassword,
      });

      alert("Data sent to database");
      alert("Form Submitted Successfully");

      setUserinfo({
        uname: "",
        uemail: "",
        umobile: "",
        uepassword: "",
        ucpassword: "",
      });

      setErr({});
    } catch (err) {
      console.log("Data not sent to database", err);
      alert("Data not sent to database");
    }
  }
};

  return (
    <div
      className="bg-light d-flex align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <Card className="shadow border-0 rounded-4">
              <Card.Body className="p-5">

                <div className="text-center mb-4">
                  <h2 className="fw-bold">Create Account</h2>
                  <p className="text-muted">
                    Sign up to get started
                  </p>
                </div>

                <Form onSubmit={formdatasave}>

                  {/* Name */}
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>

                    <InputGroup>
                      <InputGroup.Text>
                        <i className="bi bi-person"></i>
                      </InputGroup.Text>

                     <Form.Control
                        type="text"
                        name="uname"
                        placeholder="Enter your name"
                        value={userinfo.uname}
                        onChange={changingdata}
                        isInvalid={!!err.uname}
                      />

                      
                      
                    </InputGroup>

                    <small className="text-danger">
                      {err.uname}
                    </small>
                  </Form.Group>

                  {/* Email */}
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>

                    <InputGroup>
                      <InputGroup.Text>
                        <i className="bi bi-envelope"></i>
                      </InputGroup.Text>

                      <Form.Control
                        type="email"
                        name="uemail"
                        placeholder="Enter your email"
                        value={userinfo.uemail}
                        onChange={changingdata}
                        isInvalid={!!err.uemail}
                      />

                      
                    </InputGroup>

                    <small className="text-danger">
                      {err.uemail}
                    </small>
                  </Form.Group>

                  {/* Mobile */}
                  <Form.Group className="mb-3">
                    <Form.Label>Mobile</Form.Label>

                    <InputGroup>
                      <InputGroup.Text>
                        <i className="bi bi-telephone"></i>
                      </InputGroup.Text>

                      <Form.Control
                        type="text"
                        name="umobile"
                        placeholder="Enter mobile number"
                        value={userinfo.umobile}
                        onChange={changingdata}
                        isInvalid={!!err.umobile}
                      />

                     
                    </InputGroup>

                    <small className="text-danger">
                      {err.umobile}
                    </small>
                  </Form.Group>

                  {/* Password */}
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>

                    <InputGroup>
                      <InputGroup.Text>
                        <i className="bi bi-lock"></i>
                      </InputGroup.Text>

                        <Form.Control
                            type={showPassword ? "text" : "password"}
                            name="uepassword"
                            placeholder="Enter password"
                            value={userinfo.uepassword}
                            onChange={changingdata}
                            isInvalid={!!err.uepassword}
                          />

                         

                      <Button
                        type="button"
                        variant="outline-secondary"
                        onClick={() =>
                          setShowPassword(!showPassword)
                        }
                      >
                        <i
                          className={`bi ${
                            showPassword
                              ? "bi-eye-slash"
                              : "bi-eye"
                          }`}
                        ></i>
                      </Button>
                    </InputGroup>

                    <small className="text-danger">
                      {err.uepassword}
                    </small>
                  </Form.Group>

                  {/* Confirm Password */}
                  <Form.Group className="mb-4">
                    <Form.Label>Confirm Password</Form.Label>

                    <InputGroup>
                      <InputGroup.Text>
                        <i className="bi bi-lock-fill"></i>
                      </InputGroup.Text>

                     <Form.Control
                        type={showConfirm ? "text" : "password"}
                        name="ucpassword"
                        placeholder="Confirm password"
                        value={userinfo.ucpassword}
                        onChange={changingdata}
                        isInvalid={!!err.ucpassword}
                      />

                     
                      <Button
                        type="button"
                        variant="outline-secondary"
                        onClick={() =>
                          setShowConfirm(!showConfirm)
                        }
                      >
                        <i
                          className={`bi ${
                            showConfirm
                              ? "bi-eye-slash"
                              : "bi-eye"
                          }`}
                        ></i>
                      </Button>
                    </InputGroup>

                    <small className="text-danger">
                      {err.ucpassword}
                    </small>
                  </Form.Group>

                  <Button
                    type="submit"
                    variant="success"
                    className="w-100 py-2"
                  >
                    Create Account
                  </Button>

                </Form>

                <hr />

                <p className="text-center">
                  Already have an account?{" "}
                  <Link
                    to="/"
                    className="text-decoration-none fw-bold"
                  >
                    Login
                  </Link>
                </p>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}