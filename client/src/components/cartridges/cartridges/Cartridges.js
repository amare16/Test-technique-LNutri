import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Col, Container, Row } from "react-bootstrap";
import microImgTest from "../../../assets/micronutriments/nature-img.jpg";
import "./cartridges.css";

const API_URL = "http://localhost:5000/cartridges";

const Cartridges = () => {
  const [cartridges, setCartridges] = useState([]);

  useEffect(() => {
    // fetch data
    getAllCartridges();
  }, []);

  const getAllCartridges = () => {
    axios
      .get(API_URL)
      .then((response) => {
        const allCartridges = response.data;
        console.log("data from api: ", allCartridges)

        // add our data to state
        setCartridges(allCartridges);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const handleSelect = (e) => {
    const selectedId = e.target.value;
    const selectedCartridgeState = cartridges.filter((cartridge) => cartridge.id == selectedId)[0];
    setCartridges(selectedCartridgeState);
}
  return (
    <Container>
        <Row>
            <Col>
                <select value={cartridges} onChange={(e) => {handleSelect(e)}}>
                    {cartridges.map(cartridge => (
                        <option key={cartridge.id} value={cartridge.id}>{cartridge.color}</option>
                    ))}
                </select>
            </Col>
        </Row>
      <Row className="cardRow">
        {cartridges.map((cartridge) => (
          <Col className="cardCol">
                  <Col>
                      <Card className="card" style={{backgroundColor: cartridge.color}}>
              <Card.Img
                variant="top"
                src={microImgTest}
                className="cardImage"
              />
              <Card.Body>
                <Card.Title>{cartridge.commercialName}</Card.Title>
                <Card.Text className="cardText">{cartridge.refillDescription}</Card.Text>
              </Card.Body>
            </Card>
                  </Col>
            
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cartridges;
