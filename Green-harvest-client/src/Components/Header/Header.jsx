import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Search, PersonCircle } from "react-bootstrap-icons";
import Logo1 from "../../assets/green-logo.png";
import Cart from "../Cartsection/Cart";

export default function Header() {
  const [hovered, setHovered] = useState("");

  const menuItems = [
    "HOME",
    "ABOUT US",
    "BLOG",
    "GALLERY",
    "TYPOGRAPHY",
  ];

  return (
    <Navbar
      expand="lg"
      sticky="top"
      bg="white"
      className="shadow-sm py-3"
      style={{
        zIndex: 1050,
      }}
    >
      <Container>

        {/* Logo */}
        <Navbar.Brand href="#">
          <img
            src={Logo1}
            alt="Logo"
            width="180"
          />
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Menu */}
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="mx-auto fw-semibold">

            {menuItems.map((item) => (
              <Nav.Link
                key={item}
                href="#"
                onMouseEnter={() => setHovered(item)}
                onMouseLeave={() => setHovered("")}
                style={{
                  color:
                    hovered === item ? "#6AA84F" : "#000",
                  transition: "0.3s",
                  fontSize: "17px",
                }}
              >
                {item}
              </Nav.Link>
            ))}

          </Nav>

          {/* Right Icons */}

          <div className="d-flex align-items-center gap-4 fs-4">

            {/* Search */}

            <Search
              size={26}
              style={{
                cursor: "pointer",
                color:
                  hovered === "search"
                    ? "#6AA84F"
                    : "#000",
                transition: "0.3s",
              }}
              onMouseEnter={() => setHovered("search")}
              onMouseLeave={() => setHovered("")}
            />

            {/* Cart */}

            <Cart />

            {/* Contact */}

            <PersonCircle
              size={28}
              style={{
                cursor: "pointer",
                color:
                  hovered === "person"
                    ? "#6AA84F"
                    : "#000",
                transition: "0.3s",
              }}
              onMouseEnter={() => setHovered("person")}
              onMouseLeave={() => setHovered("")}
            />

          </div>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}