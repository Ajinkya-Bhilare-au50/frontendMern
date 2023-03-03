import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
  Form,
} from "react-bootstrap";
import Rating from "../components/Rating";
import { listProductDetails } from "../actions/productActions";

// import products from "../products";
// console.log(products)
const ProductScreen = ({ match }) => {
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { id } = useParams();

 
  useEffect(() => {
    dispatch(listProductDetails(id));
   
  }, [dispatch, id]);
  
  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  }

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, product } = productDetails;
  // console.log(loading, product);
  return (
    <>
      {loading === false ? (
        <div>
          <Link className="btn btn-dark my-3" to="/">
            Go Back
          </Link>

          <Row>
            <Col md={6}>
              <Image src={product.image} alt={product.name} fluid></Image>
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroupItem>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </ListGroupItem>
                <ListGroupItem>Price:${product.price}</ListGroupItem>
                <ListGroupItem>Description:{product.description}</ListGroupItem>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroupItem>
                    <Row>
                      <Col>Price</Col>
                      <Col>
                        <strong>${product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.countInStock > 0 ? `In Stock` : `Out of Stock`}
                      </Col>
                    </Row>
                  </ListGroupItem>
                  {product.countInStock > 0 && (
                    <ListGroupItem>
                      <Row>
                        <Col>Qty</Col>
                        <Col>
                          <Form.Control
                            as="select"
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroupItem>
                  )}
                  <ListGroupItem>
                    <Button
                      onClick={addToCartHandler}
                      className="btn-block "
                      type="button"
                      disabled={product.countInStock === 0}
                    >
                      ADD To Cart
                    </Button>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </div>
      ) : (
        <p>Please wait....</p>
      )}
    </>
  );
};

export default ProductScreen;
