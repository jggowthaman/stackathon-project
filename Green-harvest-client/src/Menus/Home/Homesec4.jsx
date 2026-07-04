import React from 'react'
import "./HeroCarousel.css";
import { Container, Row, Col, Card, Nav } from "react-bootstrap";
import { Search, Cart3 } from "react-bootstrap-icons";
// import Frtimg1 from "../../assets/frtimg1.webp"
// import Frtimg8 from "../../assets/frtimg8.webp"
// import Frtimg3 from "../../assets/frtimg3.webp"
// import Frtimg4 from "../../assets/frtimg4.webp"
// import Frtimg6 from "../../assets/frtimg6.webp"
// import Frtimg7 from "../../assets/frtimg.webp"
export default function Homesec4() {
     const products = [
    {
      id: 1,
      name: "BANANAS",
      image: "https://pngimg.com/uploads/banana/banana_PNG842.png",
      oldPrice: "$30.00",
      price: "$23.00",
      badge: "SALE",
      badgeClass: "sale",
    },
    {
      id: 2,
      name: "POTATOES",
      image: "https://pngimg.com/uploads/potato/potato_PNG7089.png",
      price: "$13.00",
      badge: "NEW",
      badgeClass: "new",
    },
    {
      id: 3,
      name: "CARROTS",
      image: "https://pngimg.com/uploads/carrot/carrot_PNG4985.png",
      price: "$17.00",
       badge: "NEW",
         badgeClass: "new",
    },
    {
      id: 4,
      name: "SWEET PEPPERS",
      image: "https://pngimg.com/uploads/pepper/pepper_PNG3261.png",
      price: "$14.00",
      badge: "NEW",
      badgeClass: "new",
    },
    {
    id: 5,
    name: "STRAWBERRY",
    image: "https://pngimg.com/uploads/strawberry/strawberry_PNG2593.png",
    price: "$18.00",
    badge: "NEW",
    badgeClass: "new",
  },
 {
  id: 6,
  name: "MANGO",
  image: "https://pngimg.com/uploads/mango/mango_PNG9168.png",
  price: "$16.00",
},
  {
    id: 7,
    name: "POTATO",
    image: "https://pngimg.com/uploads/potato/potato_PNG7089.png",
    price: "$15.00",
    badge: "SALE",
    badgeClass: "sale",
  },
  {
    id: 8,
    name: "ORANGE",
    image: "https://pngimg.com/uploads/orange/orange_PNG780.png",
    price: "$20.00",
    badge: "NEW",
    badgeClass: "new",
  },
  ];
  return (
   <section className="products-section py-5">
      <Container>
        <h1 className="section-title text-center">NEW PRODUCTS</h1>

        <Nav className="justify-content-center product-nav mb-5">
          <Nav.Link active>ALL</Nav.Link>
          <Nav.Link>VEGETABLES</Nav.Link>
          <Nav.Link>FRUITS</Nav.Link>
          <Nav.Link>BREAD</Nav.Link>
        </Nav>
<Row>
  {products.map((product) => (
    <Col lg={3} md={6} key={product.id} className="mb-4">
      <Card className="product-card border-0">
        
        {product.badge && (
          <span className={`badge-tag ${product.badgeClass}`}>
            {product.badge}
          </span>
        )}

        <Card.Img
          variant="top"
          src={product.image}
          className="product-img"
        />

        <Card.Body className="text-center">
          <h4>{product.name}</h4>

          {product.oldPrice && (
            <span className="old-price">{product.oldPrice}</span>
          )}

          <span className="price ms-2">{product.price}</span>

          {/* Hover Icons for ALL Products */}
          <div className="action-icons">
            <button>
              <Search />
            </button>

            <button>
              <Cart3 />
            </button>
          </div>

        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>

      </Container>
    </section>
  )
}
