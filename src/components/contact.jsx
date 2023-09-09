import { Helmet } from "react-helmet";
import "../styles/contact.css"
const Contact = () => {
    return ( 
        <div className="contact">
            <Helmet>
                <title>Contact Us</title>
            </Helmet>
            
            {/* contact */}
            <div className="contact-us">
                <div className="overlay"></div>
                <div className="contact-title">
                    <h2>Contact Us</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, qui doloribus inventore quidem suscipit, architecto ipsum quisquam facilis nostrum voluptas cupiditate maiores! Reiciendis sed officia voluptatum. Ad repellat dignissimos modi?</p>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;