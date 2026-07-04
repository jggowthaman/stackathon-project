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
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [loginInfo, setLoginInfo] = useState({
    uemail: "",
    uepassword: "",
  });

  const [err, setErr] = useState({
    uemail: "",
    uepassword: "",
  });

  // Handle Input Change
  const changingdata = (e) => {
    const { name, value } = e.target;

    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });

    setErr({
      ...err,
      [name]: "",
    });
  };

  // Validation
  const validation = () => {
    let temperr = {};

    const emailPattern =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!loginInfo.uemail.trim()) {
      temperr.uemail = "Please enter your email";
    } else if (!emailPattern.test(loginInfo.uemail)) {
      temperr.uemail = "Please enter a valid email";
    }

    if (!loginInfo.uepassword.trim()) {
      temperr.uepassword = "Please enter your password";
    }

    setErr(temperr);

    return Object.keys(temperr).length === 0;
  };

  // Login
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validation()) return;

    try {
      const res = await axios.post(
        "http://localhost:4040/login",
        loginInfo
      );

      alert(res.data.message);

      setLoginInfo({
        uemail: "",
        uepassword: "",
      });

      setErr({});

      // Navigate to Contact Page
      navigate("/home");
    } catch (error) {
      console.log(error);

      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Server Error");
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
          <Col lg={5} md={7} sm={10}>
            <Card className="shadow border-0 rounded-4">
              <Card.Body className="p-5">

                <div className="text-center mb-4">
                  <h2 className="fw-bold">Welcome Back</h2>
                  <p className="text-muted">
                    Login to continue
                  </p>
                </div>

                <Form onSubmit={handleSubmit}>

                  {/* Email */}
                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>

                    <InputGroup>
                      <InputGroup.Text
                        className={err.uemail ? "border-danger text-danger" : ""}
                      >
                        <i className="bi bi-envelope"></i>
                      </InputGroup.Text>

                      <Form.Control
                        type="email"
                        name="uemail"
                        placeholder="Enter your email"
                        value={loginInfo.uemail}
                        onChange={changingdata}
                        isInvalid={!!err.uemail}
                      />
                    </InputGroup>

                    <Form.Control.Feedback type="invalid">
                      {err.uemail}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Password */}
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>

                    <InputGroup>
                      <InputGroup.Text
                        className={err.uepassword ? "border-danger text-danger" : ""}
                      >
                        <i className="bi bi-lock"></i>
                      </InputGroup.Text>

                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        name="uepassword"
                        placeholder="Enter password"
                        value={loginInfo.uepassword}
                        onChange={changingdata}
                        isInvalid={!!err.uepassword}
                      />

                      <Button
                        type="button"
                        variant="outline-secondary"
                        onClick={() => setShowPassword(!showPassword)}
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

                    <Form.Control.Feedback type="invalid">
                      {err.uepassword}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Remember Me */}
                  <div className="d-flex justify-content-between mb-4">
                    <Form.Check
                      type="checkbox"
                      label="Remember Me"
                    />

                    <a href="#" className="text-decoration-none">
                      Forgot Password?
                    </a>
                  </div>

                  {/* Login Button */}
                  <Button
                    type="submit"
                    variant="success"
                    className="w-100 py-2 fw-semibold"
                  >
                    Login
                  </Button>

                </Form>

                <hr />

                <p className="text-center mb-0">
                  Don't have an account?{" "}
                  <Button
                    variant="link"
                    className="text-decoration-none fw-bold p-0"
                    onClick={() => navigate("/signup")}
                  >
                    Create Account
                  </Button>
                </p>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}