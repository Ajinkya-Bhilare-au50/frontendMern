import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import "../../src/index.css"
const Product = ({ product }) => {
  // console.log(product.numReviews);
  // image Dimensions  640width*510height
  return (
    <Card
      className="my-3 p-3 rounded d-flex flex-column card-container"
      style={{
        height: "95%" /* sample arbitrary value */,
      }}
    >
      <Link to={`/props.product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link style={{ textDecoration: "none" }} to={`/product/${product._id}`}>
          <Card.Title as="div" style={{ height: "89px" }}>
            <strong>{product.name}</strong>
            <hr />
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`    ${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text
          as="h3"
          style={{
            textAlign: "center",
            background: "#FC5185",
            color: "white",
            cursor: "pointer",
          }}
        >
          ${product.price}
        </Card.Text>
      </Card.Body>
      <p style={{ fontSize: "12px" }}>
        <i>*Free Delivery Applicable</i>
      </p>
    </Card>
  );
};

export default Product;
