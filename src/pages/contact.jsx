import { Helmet } from "react-helmet";
import "../styles/contact.css"
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { useState } from "react";

const Contact = () => {

    const form = useRef();
    const [sending, setSending] = useState(false)
    const [sent, setSent] = useState(false)

    // handleSubmit
    const handleSubmit = e => {
        e.preventDefault();
        try {
            setSending(true)
            emailjs.sendForm("service_19fktnp", "template_bn16f1d", form.current, "G73m60nk1gLoLgXNR")
            .then((result) => {
                setSending(false)
                setSent(true)
            })
            .then(() => {
                setTimeout(() => {
                    form.current.reset()
                    setSent(false)
                }, 3000);
            })
            .catch(error => {
                console.log(error.text);
            });
        } catch (error) {
            console.log(error)
        }
    }
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
                </div>
            </div>
            <div className="row">
                <div className="col1">
                    <h2>Always Here to Help you</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, reprehenderit.</p>
                    <div className="contact-info">
                        <div className="info">
                            <div className="icon">
                                <i className="bi bi-geo-alt"></i>
                            </div>
                            <div className="content">
                                <h3>Location</h3>
                                <p>Kumasi</p>
                                <p>Ghana</p>
                            </div>
                        </div>
                        <div className="info">
                        <div className="icon">
                            <i className="bi bi-telephone"></i>
                        </div>
                            <div className="content">
                                <h3>Contact</h3>
                                <p>+233 552 802 788</p>
                                <p>+233 507 755 962</p>
                            </div>
                        </div>
                        <div className="info">
                        <div className="icon">
                            <i className="bi bi-envelope"></i>
                        </div>
                            <div className="content">
                                <h3>Email</h3>
                                <p>mahamuduhalic@gmail.com</p>
                            </div>
                        </div>
                        <div className="info">
                        <div className="icon">
                            <i className="bi bi-clock"></i>
                        </div>
                            <div className="content">
                                <h3>Hours of Operation</h3>
                                <p>Monday - Friday: 9:00am - 5:00pm</p>
                                <p>Saturday &amp; Sunday: 10:00am - 2:00pm</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* -----col2--------- */}

                <div className="col2">
                    <h2>Ready to Get Started</h2>
                    <p>Your email address will not be published. Required fields are marked</p>

                    {/* form */}
                    <form action="" ref={form} onSubmit={handleSubmit}>
                        {/* full name */}
                        <div className="form-group">
                            <label htmlFor="name">Name *</label>
                            <input type="text" id="name" required name="user_name"/>
                        </div>

                        {/* email address */}
                        <div className="form-group">
                            <label htmlFor="email">Email Address *</label>
                            <input type="email" id="email" name="user_email" placeholder="example@address.com" required/>
                        </div>

                        {/* phone number */}
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="text" id="phone" name="user_number" placeholder="+233 552 802 788"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message *</label>
                            <textarea name="message" id="message" cols="30" rows="10" placeholder="Write a message..." required></textarea>
                        </div>

                        <label htmlFor="terms">
                            <input type="checkbox" id="terms" required/>
                            Accept terms and privacy policy
                        </label>

                        <button><i className="bi bi-send"></i> Send Message</button>
                    </form>

                    <button className={`feedback ${sending && "activate"}`}>sending...</button>
                    <button className={`feedback ${sent && "activate"}`}>sent</button>
                    {/* <button className="feedback active">asjkld</button> */}

                </div>
            </div>

            <div className="map">
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31702.1546453152!2d-1.5957322663521385!3d6.675476297572636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb946c39956a09%3A0x67868ca2b098015f!2sKwame%20Nkrumah%20University%20of%20Science%20and%20Technology%2C%20Kumasi!5e0!3m2!1sen!2sgh!4v1690164762311!5m2!1sen!2sgh" width="" height="" style={{border: "0px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
     );
}
 
export default Contact;