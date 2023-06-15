import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Product({ product }) {
  console.log(product.photo.url);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={`${import.meta.env.VITE_API_IMG}/${product.photo.url}`} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description.slice(0, 150)} . . .</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
