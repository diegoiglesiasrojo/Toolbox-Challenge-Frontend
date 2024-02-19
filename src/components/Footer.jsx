import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        height: "10vh",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingTop: "5px",
        paddingBottom: "5px",
        backgroundColor: "#1B1A55",
      }}
    >
      <Container>
        <Row className='d-flex justify-content-around align-items-center'>
          <Col
            xs={6}
            className='d-flex justify-content-center align-items-center'
          >
            <p style={{ fontSize: "12px", color: "#9290C3", margin: "0px" }}>
              Web page created by{" "}
              <a
                style={{ textDecoration: "none", color: "#535C91" }}
                href='https://www.linkedin.com/in/darkdiego/'
                target='_blank'
                rel='noreferrer'
              >
                Diego Iglesias
              </a>
            </p>
          </Col>
          <Col
            xs={6}
            className='d-flex justify-content-center align-items-center'
          >
            <p style={{ fontSize: "10px", color: "#9290C3", margin: "0px" }}>
              All rights reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
