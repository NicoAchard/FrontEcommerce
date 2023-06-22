import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { BsGithub, BsLinkedin } from "react-icons/bs";

function TeamCard({ img, name, academicInfo, description }) {
  return (
    <div className="border rounded card ps-0 m-3">
      <Card style={{ width: "32rem" }}>
        <Row noGutters>
          <Col md={5} className="p-0">
            <Card.Img
              variant="top"
              src={img}
              className="rounded"
              style={{ height: "100%", objectFit: "cover" }}
            />
          </Col>
          <Col md={7} className="p-0">
            <Card.Body className="d-flex flex-column justify-content-between h-100 bg-color">
              <div>
                <Card.Title className="pb-1">{name}</Card.Title>
                <Card.Subtitle className="pb-3">{academicInfo}</Card.Subtitle>
                <Card.Text>{description}</Card.Text>
              </div>
              <div>
                <BsGithub className="m-2 fs-4" />
                <BsLinkedin className="m-2 fs-4" />
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default TeamCard;
