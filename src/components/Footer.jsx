import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0d6efd",
        color: "white",
        paddingTop: "40px",
        paddingBottom: "20px",
        marginTop: "50px",
      }}
    >
      <Container>
        <Row className="text-center text-md-start">
          {/* Column 1: Brand */}
          <Col md={4} className="mb-4">
            <h4 className="fw-bold">EduSphere</h4>
            <p>
              Empowering students and institutions with seamless learning
              management tools.
            </p>
          </Col>

          {/* Column 2: Links */}
          <Col md={4} className="mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Instructors
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          {/* Column 3: Social */}
          <Col md={4} className="mb-4">
            <h5 className="fw-bold">Follow Us</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="#" className="text-white fs-4">
                <FaFacebook />
              </a>
              <a href="#" className="text-white fs-4">
                <FaTwitter />
              </a>
              <a href="#" className="text-white fs-4">
                <FaLinkedin />
              </a>
              <a href="#" className="text-white fs-4">
                <FaInstagram />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="border-light" />

        {/* Bottom Section */}
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              © {new Date().getFullYear()} CourseHub. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
