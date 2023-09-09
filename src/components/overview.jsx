import { Helmet } from "react-helmet";
import welcomeImage from "../images/welcome.png"
import vision from "../images/our-vision.jpg"
import process from "../images/our-process.jpg"
import approach from "../images/our-approach.jpg"

const Overview = () => {
    return ( 
        <div className="overview">
             <Helmet>
                <title>Home</title>
            </Helmet>
            
            {/* welcome message */}
            <section className="welcome">
                <div className="overlay"></div>
                <div className="welcome-msg">
                    <h1>Welcome to learn hub</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor numquam voluptatum totam a! Laboriosam, expedita porro temporibus corporis explicabo illum nostrum, omnis officia, sit distinctio exercitationem labore! Laudantium, mollitia repellendus.</p>
                </div>
            </section>

            {/* about us */}
            <section className="about-us">
                <div className="about-title">
                    <h2>About Us</h2>
                    <div className="about-msg">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat error reprehenderit facere necessitatibus minus veniam quas recusandae, quae, fugit maiores autem dicta molestias fuga expedita itaque laborum cumque! Ullam, beatae.</p>
                    </div>
                </div>

                <div className="about-body">
                    <div className="col">
                        <div className="row">
                            <div className="content">
                                <h3>Our Vision</h3>
                                <div className="txt">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae saepe et a, cumque libero debitis voluptate alias! Corrupti nobis magni error autem numquam odit sunt nostrum dolore? Maiores, magni numquam.</p>
                                </div>
                            </div>
                            <div className="image">
                                <img src={vision} alt="" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="image">
                                <img src={approach} alt="" />
                            </div>
                            <div className="content">
                                <h3>Our Approach</h3>
                                <div className="txt">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae saepe et a, cumque libero debitis voluptate alias! Corrupti nobis magni error autem numquam odit sunt nostrum dolore? Maiores, magni numquam.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="content">
                                <h3>Our Process</h3>
                                <div className="txt">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae saepe et a, cumque libero debitis voluptate alias! Corrupti nobis magni error autem numquam odit sunt nostrum dolore? Maiores, magni numquam.</p>
                                </div>
                            </div>
                            <div className="image">
                                <img src={process} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* our services */}
            <section className="services">
                <div className="title">
                    <h2>Services</h2>
                </div>

                <div className="cards">
                    <div className="card">
                    <i className="fa-solid fa-chart-line"></i>
                        <p>Growth</p>
                    </div>
                    <div className="card">
                    <i className="fa-solid fa-dumbbell"></i>
                        <p>Skills</p>
                    </div>
                    <div className="card">
                    <i className="fa-regular fa-message"></i>
                        <p>Interactivity</p>
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default Overview;