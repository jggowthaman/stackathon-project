import React from "react";
import "./Offer.css";

import {
  GeoAlt,
  Basket,
  Heart,
  Gift,
  ChevronRight,
} from "react-bootstrap-icons";

import banner from "../assets/bg-offer.jpg";

export default function Offer() {
  const data = [
    {
      no: "01",
      icon: <GeoAlt />,
      title: "FREE SHIPPING",
      text: "Cur tantas regiones barbarorum peat dibus obiit, tregiones barbarorum peat dibus obiit, tot mariata",
    },
    {
      no: "02",
      icon: <Basket />,
      title: "ORGANIC FOOD",
      text: "Fraticinidas volare in regius cirpi! Raptus, fatalis sagas etiam perdere de camerarius, fortis detrius.",
    },
    {
      no: "03",
      icon: <Heart />,
      title: "HEALTHY FOR YOU",
      text: "Vae, clemens lanista! Cum lacta favere, omnes competitiones resuscitabo salvus, flavum",
    },
    {
      no: "04",
      icon: <Gift />,
      title: "GIFTS FOR CLIENTS",
      text: "A falsis, valebat brevis homo. Neuter, alter abactors rare convertam de flavum, bassus clabulare.",
    },
  ];

  return (
    <>
      {/* Banner */}

      <section
        className="offer-banner"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="overlay">
          <h1>WHAT WE OFFER</h1>
        </div>
      </section>

      {/* Breadcrumb */}

      <div className="breadcrumb-area">
        <span>HOME</span>

        <ChevronRight />

        <span>PAGES</span>

        <ChevronRight />

        <strong>WHAT WE OFFER</strong>
      </div>

      {/* Services */}

      <section className="offer-section">
        <div className="offer-container">
          {data.map((item, index) => (
            <div className="offer-card" key={index}>
              <h1 className="number">{item.no}</h1>

              <div className="icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}