import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { Person, Envelope, Telephone, ChatLeftText } from "react-bootstrap-icons";
import { useState } from "react";
import axios from 'axios'

export default function Contactsec2() {

  const [userinfo, setuserinfo] = useState({
    uname: "",
    uemail: "",
    umobile: "",
    umessage: "",
  });

  const [err, seterr] = useState({});

  // Handle Input Change
  const changingdata = (e) => {
    const { name, value } = e.target;

    setuserinfo({
      ...userinfo,
      [name]: value,
    });

    seterr({
      ...err,
      [name]: "",
    });
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
    const emailpattern =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!userinfo.uemail.trim()) {
      temperr.uemail = "Please enter your email";
    } else if (!emailpattern.test(userinfo.uemail)) {
      temperr.uemail = "Please enter a valid email";
    }

    // Mobile
    const mobilepattern = /^[6-9][0-9]{9}$/;

    if (!userinfo.umobile.trim()) {
      temperr.umobile = "Please enter your mobile number";
    } else if (!mobilepattern.test(userinfo.umobile)) {
      temperr.umobile = "Please enter a valid mobile number";
    }

    // Message
    if (!userinfo.umessage.trim()) {
      temperr.umessage = "Please enter your message";
    } else if (userinfo.umessage.length < 10) {
      temperr.umessage = "Message must be at least 10 characters";
    }

    seterr(temperr);

    return Object.keys(temperr).length === 0;
  };

  // Submit
  const formdatasave = async(e) => {
    e.preventDefault();

    if (myvalidation()) {
      console.log(userinfo);
      console.log('Form data saved');
      setuserinfo({uname:"",uemail:"",umobile:"",umessage:""});
    }
    try{
      await axios.post("http://localhost:4040/connect", userinfo);
      alert("data send to db");
    }
    catch(err){
      console.log("data not send to db",err);
      alert("data not send to db")
    }
  

      alert("Form Submitted Successfully");

      setuserinfo({
        uname: "",
        uemail: "",
        umobile: "",
        umessage: "",
      });

      seterr({});
    }
  

  return (
    <section className="py-5">
      <Container>
        <Row>
          {/* Contact Details */}
          <Col lg={5} className="mb-5">
            <h2 className="fw-light mb-4">Contact Details</h2>

            <p>
              <strong>Address:</strong>
              <br />
              4578 Marmora Road,
              <br />
              Glasgow, D04 89GR
            </p>

            <p>
              <strong>Phone:</strong>
              <br />
              (800) 123-0045
            </p>

            <p>
              <strong>Email:</strong>
              <br />
              <span className="text-success">
                react-rangers@gmail.com
              </span>
            </p>

            <p>
              <strong>Open:</strong>
              <br />
              Mon - Fri : 10 AM - 8 PM
            </p>
          </Col>

          {/* Contact Form */}
          <Col lg={7}>
            <h2 className="fw-light mb-4">
              Let's Get In Touch
            </h2>

            <Form onSubmit={formdatasave} noValidate>

              {/* Name */}
              <InputGroup className="mb-3">
                <InputGroup.Text>
                  <Person />
                </InputGroup.Text>

                <Form.Control
                  type="text"
                  name="uname"
                  placeholder="Your Name"
                  value={userinfo.uname}
                  onChange={changingdata}
                  isInvalid={!!err.uname}
                />

                <Form.Control.Feedback type="invalid">
                  {err.uname}
                </Form.Control.Feedback>
              </InputGroup>

              {/* Email */}
              <InputGroup className="mb-3">
                <InputGroup.Text>
                  <Envelope />
                </InputGroup.Text>

                <Form.Control
                  type="email"
                  name="uemail"
                  placeholder="Your Email"
                  value={userinfo.uemail}
                  onChange={changingdata}
                  isInvalid={!!err.uemail}
                />

                <Form.Control.Feedback type="invalid">
                  {err.uemail}
                </Form.Control.Feedback>
              </InputGroup>

              {/* Mobile */}
              <InputGroup className="mb-3">
                <InputGroup.Text>
                  <Telephone />
                </InputGroup.Text>

                <Form.Control
                  type="text"
                  name="umobile"
                  placeholder="Your Phone"
                  value={userinfo.umobile}
                  onChange={changingdata}
                  isInvalid={!!err.umobile}
                />

                <Form.Control.Feedback type="invalid">
                  {err.umobile}
                </Form.Control.Feedback>
              </InputGroup>

              {/* Message */}
              <InputGroup className="mb-3">
                <InputGroup.Text>
                  <ChatLeftText />
                </InputGroup.Text>

                <Form.Control
                  as="textarea"
                  rows={5}
                  name="umessage"
                  placeholder="Your Message"
                  value={userinfo.umessage}
                  onChange={changingdata}
                  isInvalid={!!err.umessage}
                />

                <Form.Control.Feedback type="invalid">
                  {err.umessage}
                </Form.Control.Feedback>
              </InputGroup>

              <Button
                type="submit"
                variant="warning"
                className="px-5 py-2"
              >
                SEND MESSAGE
              </Button>

            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}