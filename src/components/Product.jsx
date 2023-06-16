import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Product.css";

function Product({ product }) {
  return (
    <Card style={{ width: "18rem", border: "none" }}>
      <Card.Img src={`${import.meta.env.VITE_API_IMG}/${product.photo.url}`} />
      <Card.Body style={{ height: "250px" }}>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description.slice(0, 150)} . . .</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
