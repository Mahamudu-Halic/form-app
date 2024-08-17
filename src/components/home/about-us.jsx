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
            LearnHub is an interactive online learning platform designed to
            enhance the undergraduate learning experience. The existing
            educational landscape lacks a comprehensive platform for storing,
            categorizing, and sharing learning materials among users. There is a
            need for a centralized platform that facilitates collaboration,
            knowledge exchange, and easy access to educational resources.
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
                  The aim of LearnHub is to revolutionize the online learning
                  experience by providing an interactive platform that
                  centralizes learning resources and personalizes the learning
                  experience. LearnHub seeks to empower students by offering a
                  seamless and enriching learning environment that facilitates
                  easy access to diverse educational materials, delivers
                  personalized recommendations tailored to individual
                  preferences.
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
                  Create a collaborative environment that promotes knowledge
                  sharing. <br />
                  Design a robust and secure user authentication system. <br />
                  Establish an intuitive user interface for seamless navigation
                  and engagement. <br /> Develop a user-friendly web application
                  for LearnHub. <br /> Develop an efficient categorization
                  system for organizing learning materials by subject area or
                  topic. <br />
                  Implement features that enable undergraduate students to
                  easily upload, access, and download learning materials.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="content">
              <h3>Our Process</h3>
              <div className="txt">
                <p>
                  LearnHub will follow an agile methodology, allowing for
                  iterative and incremental progress. The project will be
                  divided into several phases, including requirements gathering,
                  system design, implementation, testing, and deployment.
                  Regular testing of the project will ensure continuous
                  improvement and alignment with user expectations.
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
