import React from "react";
import { Card, CardBody, CardFooter, Col, Container, Row } from "reactstrap";
import dataTrending from "./dataTrending.json";

function Trending() {
  return (
    <div className="trending">
      <Container>
        <Row>
          <Col md="12" className="text-center trending-title">
            <p className="">Top Products</p>
            <h4 className="trendingTitle text-uppercase">Trending this week</h4>
          </Col>
          <Col md="12" className="trendingProduct">
            <Row>
              {dataTrending.map((value) => {
                return (
                  <Col className="product" md="3" key={value.id}>
                    <Card>
                      <CardBody>
                        <img src={value.url} alt="Trending Img" />
                      </CardBody>
                      <CardFooter>
                        <p>{value.title}</p>
                        <span>${value.price}</span>
                      </CardFooter>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Trending;
