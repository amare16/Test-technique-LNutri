import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./home.css";

const Home = () => {
  return (
    <Container>
      <Row style={{ marginTop: "200px" }}>
        <Col
          xs={12}
          md={6}
          style={{ margin: "0 auto"}}
        >
          <h1 style={{ textAlign: "center", color: "#306EB2", fontSize: "100px" }}>MyNumea</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
