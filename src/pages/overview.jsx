import { Helmet } from "react-helmet";

import "../styles/overview.css"
import {Footer, ChatBot} from "../components"
import { AboutUs } from "../components/home/about-us";

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
                    <h1>Welcome to <span className="title">ShareSync</span></h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor numquam voluptatum totam a! Laboriosam, expedita porro temporibus corporis explicabo illum nostrum, omnis officia, sit distinctio exercitationem labore! Laudantium, mollitia repellendus.</p>
                </div>
            </section>

            {/* about us */}
            <AboutUs />

            {/* our services */}
            <section className="services">
                <div className="">
                    <h2>Services</h2>
                </div>

                <div className="cards">
                    <div className="card">
                    <i className="bi bi-graph-up-arrow"></i>
                        <p>Growth</p>
                    </div>
                    <div className="card">
                    <i className="bi bi-code-slash"></i>
                        <p>Skills</p>
                    </div>
                    <div className="card">
                    <i className="bi bi-person-arms-up"></i>
                        <p>Interactivity</p>
                    </div>
                </div>
            </section>

            {/* chatbot */}
            {/* <ChatBot /> */}
            {/* footer */}
            <Footer />
        </div>
     );
}
 
export default Overview;