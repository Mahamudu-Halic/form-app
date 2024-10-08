import { Link } from "react-router-dom";
import "../../styles/footer.css";
const Footer = () => {
  return (
    <footer>
      <h2>
        <span className="title">LearnHub</span>
      </h2>
      <div className="footer">
        <div className="footer-info">
          <div className="footer-about">
            <h3>about us</h3>
            <p>
              LearnHub is an online learning platform for undergraduate
              students, providing personalized educational materials and
              fostering a collaborative community.
            </p>
          </div>

          <div className="footer-contact">
            <h3>contact us</h3>
            <p>
              <i className="bi bi-telephone"></i> +233 552 802 788
            </p>
            <p>
              <i className="bi bi-envelope"></i> mahamuduhalic@gmail.com
            </p>
          </div>
        </div>

        <div className="footer-location">
          <h3>services</h3>
          <div className="service-items">
            <Link to="/courses" className="">
              View Courses
            </Link>
            <Link to="/upload" className="">
              Upload Courses
            </Link>
            <Link to="/community" className="">
              Chat with Community
            </Link>
          </div>
        </div>

        <div className="footer-media">
          <h3>social media</h3>
          <div className="media-icons">
            <a
              href="https://twitter.com/mahamuduhalic"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-twitter-x"></i>
            </a>
            <a
              href="https://github.com/Mahamudu-Halic"
              rel="noreferrer"
              target="_blank"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/halic-mahamudu-361946216/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* <p>Created by Halic&copy;2023</p> */}
    </footer>
  );
};

export default Footer;
