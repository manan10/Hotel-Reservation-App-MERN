import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Logo from "../../../assests/images/logo.png";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <Container fluid className={classes.Footer}>
      <Row>
        <Col md={4} style={{ textAlign: "center" }}>
          <img
            src={Logo}
            alt="The Atlanic"
            width="150px"
            height="150px"
            style={{ borderRadius: "150px" }}
          />
          <h2
            style={{
              marginTop: "20px",
              color: "white",
              fontFamily: "Bookman, URW Bookman L, serif",
            }}
          >
            The Atlantic Hotel
          </h2>
          <h6
            style={{
              marginTop: "-15px",
              marginLeft: "80px",
              color: "white",
              fontFamily: "Bookman, URW Bookman L, serif",
              fontStyle: "italic",
            }}
          >
            where Royalty meets Modernism...
          </h6>
        </Col>

        <Col md={8} style={{ fontFamily: "Bookman, URW Bookman L, serif" }}>
          <h4
            style={{
              marginTop: "30px",
              color: "white",
            }}
          >
            {" "}
            Contact Us:{" "}
          </h4>
          <p>
            <b>Address:</b> 955W President George Bush Hwy, Richardson, TX-
            75080
          </p>
          <p>
            <b>Contact:</b> (749)-827-9109
          </p>
          <p>
            <b>Email:</b> theatlantic@gmail.com
          </p>
        </Col>
      </Row>
      <p style={{ textAlign: "center", marginTop: "45px", fontSize: "14px" }}>
        © The Atlantic Hotel
      </p>
    </Container>
  );
};

export default Footer;
