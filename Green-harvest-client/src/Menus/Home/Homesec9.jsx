import React from 'react'
import { Carousel, Row, Col, Card } from "react-bootstrap";
import blog1 from "../../assets/blog1.jpg";
import blog2 from "../../assets/blog2.jpg";
import blog3 from "../../assets/blog3.jpg";
import blog4 from "../../assets/blog4.jpg";
import blog5 from "../../assets/blog5.jpg";
import blog6 from "../../assets/blog6.jpg";
export default function Homesec9() {
    const blogs = [
    {
      img: blog1,
      title: "Why Organic Farming Keeps Getting Popular Globally",
      date: "August 9, 2023",
    },
    {
      img: blog2,
      title: "Everyday Dinner Choices for a Healthier, Happier You",
      date: "August 9, 2023",
    },
    {
      img: blog3,
      title: "Standardizing the Organic Industry in the USA",
      date: "August 9, 2023",
    },
    {
      img: blog4,
      title: "Benefits of Fresh Organic Vegetables",
      date: "August 9, 2023",
    },
    {
      img: blog5,
      title: "Healthy Food Habits for Modern Life",
      date: "August 9, 2023",
    },
    {
      img: blog6,
      title: "How Organic Crops Improve Soil Quality",
      date: "August 9, 2023",
    },
  ];
     const slides = [];
  for (let i = 0; i < blogs.length; i += 3) {
    slides.push(blogs.slice(i, i + 3));
  }
  return (
    <>
     <h1 className="text-center fw-bold display-2 mb-5">
        OUR BLOG
      </h1> 
     <Carousel interval={3000}>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <Row className="g-4">
              {slide.map((blog, i) => (
                <Col lg={4} md={6} sm={12} key={i}>
                  <Card className="border-0 text-center h-100">
                    <Card.Img
                      variant="top"
                      src={blog.img}
                      style={{
                        height: "350px",
                        objectFit: "cover",
                      }}
                    />

                    <Card.Body>
                      <h3 className="fw-semibold">
                        {blog.title}
                      </h3>

                      <p className="text-muted mb-0">
                        {blog.date}
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
      </>
  )
}
