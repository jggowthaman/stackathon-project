import c1 from "../../assets/contact1.jpg";

export default function Contactsec1() {
  return (
    <section
      className="d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${c1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "450px",
        width: "100%",
      }}
    >
      <h1
        className="text-white fw-bold m-0"
        style={{
          fontSize: "40px",
          letterSpacing: "4px",
        }}
      >
        CONTACT US
      </h1>
    </section>
  );
}