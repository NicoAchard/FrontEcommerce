import { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function FeatureNotImplemented() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (show) {
      const timeout = setTimeout(() => {
        setShow(false);
      }, 3000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [show]);

  return (
    <>
      {show && (
        <Alert variant="warning" style={{ position: "fixed", top: "90px", right: "7px" }}>
          <strong>Sorry 😪</strong> This functionality has not been implemented yet.
        </Alert>
      )}
    </>
  );
}

export default FeatureNotImplemented;
