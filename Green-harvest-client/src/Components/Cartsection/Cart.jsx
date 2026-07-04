import React, { useState } from "react";
import { Offcanvas, Button, Image } from "react-bootstrap";
import { Cart3 } from "react-bootstrap-icons";

import orangeImg from "../../assets/cartimg1.webp";
import bananaImg from "../../assets/cartimg2.png";

export default function Cart() {
  const [show, setShow] = useState(false);

  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Oranges",
      price: 20,
      qty: 1,
      image: orangeImg,
    },
    {
      id: 2,
      name: "Bananas",
      price: 23,
      qty: 1,
      image: bananaImg,
    },
  ]);

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: item.qty > 1 ? item.qty - 1 : 1,
            }
          : item
      )
    );
  };

  const totalProducts = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <>
      {/* Cart Icon */}

      <div
        className="position-relative"
        style={{ cursor: "pointer" }}
        onClick={() => setShow(true)}
      >
        <Cart3 size={28} />

        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
          {totalProducts}
        </span>
      </div>

      {/* Offcanvas */}

      <Offcanvas
        show={show}
        onHide={() => setShow(false)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h4 className="fw-bold">YOUR CART</h4>

            <h6>
              IN CART : {totalProducts} PRODUCTS
            </h6>

            <h5 className="fw-bold">
              TOTAL PRICE : ${totalPrice}
            </h5>
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>

          {cart.map((item) => (

            <div
              key={item.id}
              className="border-bottom pb-3 mb-3"
            >

              <div className="row align-items-center">

                <div className="col-4">
                  <Image
                    src={item.image}
                    fluid
                    rounded
                  />
                </div>

                <div className="col-8">

                  <h5>{item.name}</h5>

                  <div className="d-flex align-items-center justify-content-between">

                    <div className="d-flex align-items-center gap-2">

                      <Button
                        variant="outline-secondary"
                        onClick={() => decreaseQty(item.id)}
                      >
                        -
                      </Button>

                      <span className="fw-bold">
                        {item.qty}
                      </span>

                      <Button
                        variant="outline-secondary"
                        onClick={() => increaseQty(item.id)}
                      >
                        +
                      </Button>

                    </div>

                    <strong>
                      ${item.price * item.qty}
                    </strong>

                  </div>

                </div>

              </div>

            </div>

          ))}

          <div className="d-grid gap-3 mt-4">

            <Button
              variant="outline-dark"
              size="lg"
            >
              GO TO CART
            </Button>

            <Button
              variant="success"
              size="lg"
            >
              CHECKOUT
            </Button>

          </div>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}