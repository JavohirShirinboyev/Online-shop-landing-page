import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  Row,
} from "reactstrap";
import dataCollec from "./dataCollec.json";
import productImg from "../assets/img3.png";
function NewCollec() {
  return (
    <div className="newcollec">
      <Container>
        <Row>
          <Col md="12">
            <p>Straight From Nike</p>
            <h4>New Collection</h4>
          </Col>
          <Col className="cardsArea" lg="6" md="12">
            <Row>
              {dataCollec.map((data) => {
                return (
                  <Col className="cards" lg="6" md="6" key={data.id}>
                    <Card>
                      <CardBody>
                        <img src={data.url} alt="Collection Img" />
                      </CardBody>
                      <CardFooter>
                        <p>{data.title}</p>
                        <span>${data.price}</span>
                      </CardFooter>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Col>
          <Col className="product-card" lg="6" md="12">
            <Card>
              <CardHeader>
                <span className="discount">sale -50%</span>
                <span className="price-collec">$99</span>
              </CardHeader>
              <CardBody>
                <img src={productImg} alt="Collection Img" />
              </CardBody>
              <CardFooter className="leftCardFoot">
                <h4 className="brand-title">Nike Air Force</h4>
                <p className="brand-name">Brand: Nike</p>
              </CardFooter>
            </Card>
          </Col>
          <Col md="12" className="newcollec-footer">
            <a href="#" className="exploreBtn">
              Explore Other Products
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NewCollec;
