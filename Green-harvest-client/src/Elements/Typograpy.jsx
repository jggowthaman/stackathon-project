import "./Typograpy.css";
import bgImage from "../assets/bg-typo.jpg";

const Typography = () => {
  return (
    <>
      {/* Banner */}
      <section
        className="typography-banner"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="overlay"></div>

        <div className="content">
          <h1>TYPOGRAPHY</h1>
        </div>
      </section>

      {/* Typography Section */}
      <section className="typography-section">
        {/* Left Section */}
        <div className="left-section">
          <div className="heading-block">
            <h1>H1 HEADING</h1>
            <p>
              Welcome to our wonderful world. We sincerely hope that each and
              every user entering our website will find exactly what he/she is
              looking for. With advanced features of activating account and new
              login widgets, you will definitely have a great experience of
              using our web page.
            </p>
          </div>

          <div className="heading-block">
            <h2>H2 HEADING</h2>
            <p>
              Welcome to our wonderful world. We sincerely hope that each and
              every user entering our website will find exactly what he/she is
              looking for. With advanced features of activating account and new
              login widgets, you will definitely have a great experience of
              using our web page.
            </p>
          </div>

          <div className="heading-block">
            <h3>H3 HEADING</h3>
            <p>
              Welcome to our wonderful world. We sincerely hope that each and
              every user entering our website will find exactly what he/she is
              looking for. With advanced features of activating account and new
              login widgets, you will definitely have a great experience of
              using our web page.
            </p>
          </div>

          <div className="heading-block">
            <h4>H4 HEADING</h4>
            <p>
              Welcome to our wonderful world. We sincerely hope that each and
              every user entering our website will find exactly what he/she is
              looking for. With advanced features of activating account and new
              login widgets, you will definitely have a great experience of
              using our web page.
            </p>
          </div>

          <div className="heading-block">
            <h5>H5 Heading</h5>
            <p>
              Welcome to our wonderful world. We sincerely hope that each and
              every user entering our website will find exactly what he/she is
              looking for. With advanced features of activating account and new
              login widgets, you will definitely have a great experience of
              using our web page.
            </p>
          </div>

          <div className="heading-block">
            <h6>H6 Heading</h6>
            <p>
              Welcome to our wonderful world. We sincerely hope that each and
              every user entering our website will find exactly what he/she is
              looking for. With advanced features of activating account and new
              login widgets, you will definitely have a great experience of
              using our web page.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <div className="sidebar-box">
            <p className="title">GOOGLE FONTS</p>

            <h2 className="poppins">Poppins</h2>
            <h3 className="lato">Lato</h3>
            <h4 className="kalam">Kalam</h4>
          </div>

          <div className="sidebar-box">
            <p className="title">USED COLORS</p>

            <div className="color-grid">
              <div className="color blue"></div>
              <div className="color gray"></div>
              <div className="color black"></div>
              <div className="color darkgray"></div>
              <div className="color light1"></div>
              <div className="color light2"></div>
            </div>
          </div>
        </div>
      </section>
       
       {/* HTML Elements Section */}

<section className="html-elements">

  <div className="html-text">
    <h2>HTML TEXT ELEMENTS</h2>

    <p>
      Welcome to our wonderful world.
      <strong> This is a bold text.</strong>

      <mark>This is a highlighted text</mark>

      We sincerely hope that each and every user entering our website will find
      exactly what he/she is looking for. With advanced features of activating
      account and new login Tooltips widgets, you will definitely have a great
      experience of using our web page.

      <del>This is a strikethrough text.</del>

      <u>This is an underlined text.</u>

      <a href="#"> Link Hover</a>

      <a href="#"> link Press link</a>
    </p>
  </div>

  {/* Ordered & Unordered Lists */}

  <div className="list-section">

    <h2>ORDERED & UNORDERED LISTS</h2>

    <div className="lists">

      <ul>
        <li>Consulting</li>
        <li>Customer Service</li>
        <li>Innovations</li>
        <li>Management</li>
        <li>Ethics</li>
      </ul>

      <ol>
        <li>Consulting</li>
        <li>Customer Service</li>
        <li>Innovations</li>
        <li>Management</li>
        <li>Ethics</li>
      </ol>

    </div>

  </div>

  {/* Blockquote */}

  <div className="blockquote-section">

    <h2>BLOCKQUOTE</h2>

    <div className="quote-box">

      <span className="quote-icon">❝</span>

      <p>
        Welcome to our wonderful world. We sincerely hope that you
        will enjoy visiting our website.
      </p>

    </div>

    <hr />

    <h4>PATRICK GOODMAN</h4>

  </div>

</section>

    </>
  );
};

export default Typography;