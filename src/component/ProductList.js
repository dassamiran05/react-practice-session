import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import "./product.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data?.slice(0, 5)))
      .catch((error) => console.log(error));
  }, []);

  const singleProduct = products?.map((product) => {
    return (
      <>
        <Card className="card">
          <div className="img-container">
            <Card.Img variant="top" src={product?.image} />
          </div>

          <Card.Body>
            <Card.Title>{product?.title}</Card.Title>
            <Card.Text>$ {product?.price}</Card.Text>
            <Button variant="primary">Add To Cart</Button>
          </Card.Body>
        </Card>
      </>
    );
  });
  return (
    <div className="product">
      <div className="container">
        <div className="gridItem">{singleProduct}</div>
      </div>
    </div>
  );
};

export default ProductList;
