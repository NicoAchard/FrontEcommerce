import { Spinner } from "react-bootstrap";
export default () => {
  return (
    <div className="d-flex flex-column gap-2 align-items-center justify-content-center my-4">
      <Spinner animation="border" style={{ fontSize: "2rem", width: "5rem", height: "5rem" }} />
      <span className="h3">Sending form</span>
    </div>
  );
};
