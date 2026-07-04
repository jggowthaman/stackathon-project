import { useState } from "react";
import "./Gallery.css";
import fruit1 from "../assets/grid-gallery-1.jpg";
import fruit2 from "../assets/grid-gallery-2.jpg";
import fruit3 from "../assets/grid-gallery-3.jpg";
import fruit4 from "../assets/grid-gallery-4.jpg";
import veg1 from "../assets/grid-gallery-5.jpg";
import veg2 from "../assets/grid-gallery-6.jpg";

const images = [
  {
    id: 1,
    category: "fruits",
    image: fruit1,
  },
  {
    id: 2,
    category: "fruits",
    image: fruit2,
  },
  {
    id: 3,
    category: "vegetables",
    image: veg1,
  },
  {
    id: 4,
    category: "fruits",
    image: fruit3,
  },
  {
    id: 5,
    category: "vegetables",
    image: veg2,
  },
  {
    id: 6,
    category: "fruits",
    image: fruit4,
  },
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");

  const filteredImages =
    filter === "all"
      ? images
      : images.filter((item) => item.category === filter);

  return (

    
    <section className="gallery-section">

        <section class="hero">
        <div class="overlay"></div>

        <div class="content">
            <h1>GRID GALLERY</h1>
        </div>
        </section>

      <div className="gallery-menu">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          ALL
        </button>

        <button
          className={filter === "fruits" ? "active" : ""}
          onClick={() => setFilter("fruits")}
        >
          FRUITS
        </button>

        <button
          className={filter === "vegetables" ? "active" : ""}
          onClick={() => setFilter("vegetables")}
        >
          VEGETABLES
        </button>
      </div>

      <div className="gallery-grid">
        {filteredImages.map((item) => (
          <div className="gallery-card" key={item.id}>
            <img src={item.image} alt="" />
          </div>
        ))}
      </div>

    </section>
  );
}