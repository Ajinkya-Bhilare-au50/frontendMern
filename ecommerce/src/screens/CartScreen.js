import React, { useEffect } from "react";
import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  card,
  ListGroupItem,
} from "react-bootstrap";
import Message from "../components/Message";
import { addToCart } from "../actions/cartActions";
const CartScreen = ({ match }) => {
  const search = useLocation().search;
  const { id } = useParams();

  const qty = new URLSearchParams(search).get("qty");

  // console.log("qty" + qty);
  // console.log("id" + id);
  // const EMPTY_CART = { cartItems: [] };
  // console.log(useDispatch());
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
//   console.log(cart);
  const { cartItem } = cart;
  console.log("cartItem" + cartItem);

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);
    // console.log(cartItem);
    // console.log(cartItem.length);
    
    const removeFromCartHandler = (id) => {
     console.log("remove")
    };
  return (
    <Row>
      <Col md={8}>
        <h1>Added to Shopping Cart</h1>
        {/* {cartItem.length === 0 ? (
          <Message>
            Your cart is empty <Link to="/">Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItem.map((item) => (
              <ListGroupItem key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroupItem>
            ))}
          </ListGroup>
        )} */}
      </Col>
      <Col md={2}></Col>
      <Col md={2}></Col>
    </Row>
  );
};

export default CartScreen;
