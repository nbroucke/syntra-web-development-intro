import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import MenuContext from "../state/MenuContext";
import React, { useContext } from "react";
import ThemeContext from "../state/ThemeContext";
import Form from "react-bootstrap/Form";

function OffcanvasComponent() {
  const { status, toggleStatus } = useContext(MenuContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          expanded={status}
          className="mb-3"
          variant={theme.color}
          bg={theme.color}
        >
          <Container fluid>
            <Navbar.Brand href="#">current theme : {theme.color}</Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              onClick={toggleStatus}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton onClick={toggleStatus}>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link
                    style={{ color: "inherit", textDecoration: "inherit" }}
                    to="/"
                  >
                    Home
                  </Link>
                  <Link
                    style={{ color: "inherit", textDecoration: "inherit" }}
                    to="/about"
                  >
                    About
                  </Link>
                  <Link
                    style={{ color: "inherit", textDecoration: "inherit" }}
                    to="/contacts"
                  >
                    Contacts
                  </Link>

                  <Form.Check
                    type={"switch"}
                    id={`default-${"checkbox"}`}
                    label={`dark theme`}
                    onChange={toggleTheme}
                    checked={theme.color === "dark"}
                  />
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasComponent;
