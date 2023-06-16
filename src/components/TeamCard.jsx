import Card from "react-bootstrap/Card";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

function TeamCard({ img, name, academicInfo, description }) {
  return (
    <div className="border rounded card ps-0 m-2 ">
      <Card style={{ width: "24rem" }}>
        <Card.Img
          variant="top"
          src={img}
          className="rounded"
          style={{ height: "300px", objectFit: "cov" }}
        />
        <Card.Body>
          <Card.Title className="pb-1">{name}</Card.Title>
          <Card.Subtitle className="pb-3">{academicInfo}</Card.Subtitle>
          <Card.Text>{description}</Card.Text>
          <BsGithub className="m-2 fs-4" />
          <BsLinkedin className="m-2 fs-4" />
        </Card.Body>
      </Card>
    </div>
  );
}

export default TeamCard;
