import vision from "../../assets/our-vision.jpg";
import process from "../../assets/our-process.jpg";
import approach from "../../assets/our-approach.jpg";

export const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-title">
        <h2>About Us</h2>
        <div className="about-msg">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
            error reprehenderit facere necessitatibus minus veniam quas
            recusandae, quae, fugit maiores autem dicta molestias fuga expedita
            itaque laborum cumque! Ullam, beatae.
          </p>
        </div>
      </div>

      <div className="about-body">
        <div className="col">
          <div className="row">
            <div className="content">
              <h3>Our Vision</h3>
              <div className="txt">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Beatae saepe et a, cumque libero debitis voluptate alias!
                  Corrupti nobis magni error autem numquam odit sunt nostrum
                  dolore? Maiores, magni numquam.
                </p>
              </div>
            </div>
            <div className="image">
              <img src={vision} alt="" />
            </div>
          </div>
          <div className="row reverse">
            <div className="image">
              <img src={approach} alt="" />
            </div>
            <div className="content">
              <h3>Our Approach</h3>
              <div className="txt">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Beatae saepe et a, cumque libero debitis voluptate alias!
                  Corrupti nobis magni error autem numquam odit sunt nostrum
                  dolore? Maiores, magni numquam.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="content">
              <h3>Our Process</h3>
              <div className="txt">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Beatae saepe et a, cumque libero debitis voluptate alias!
                  Corrupti nobis magni error autem numquam odit sunt nostrum
                  dolore? Maiores, magni numquam.
                </p>
              </div>
            </div>
            <div className="image">
              <img src={process} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// export default AboutUs
