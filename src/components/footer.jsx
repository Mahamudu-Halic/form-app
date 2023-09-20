import '../styles/footer.css'
const Footer = () => {
    return(
        <footer>
            <h2>Share<span>Sync</span></h2>
            <div className="footer">
                <div className="footer-info">
                    <div className="footer-about">
                        <h3>about us</h3>
                        <p>ShareSync is an online learning platform for undergraduate students, providing personalized educational materials and fostering a collaborative community.</p>
                    </div>

                    <div className="footer-contact">
                        <h3>contact us</h3>
                        <p><i className="fa-solid fa-phone"></i> +233 552 802 788</p>
                        <p><i className="fa-solid fa-envelope"></i> mahamuduhalic@gmail.com</p>
                    </div>
                </div>

                <div className="footer-location">
                    <h3>location</h3>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31702.1546453152!2d-1.5957322663521385!3d6.675476297572636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb946c39956a09%3A0x67868ca2b098015f!2sKwame%20Nkrumah%20University%20of%20Science%20and%20Technology%2C%20Kumasi!5e0!3m2!1sen!2sgh!4v1690164762311!5m2!1sen!2sgh" width="" height="" style={{border: "0px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className="footer-media">
                    <h3>social media</h3>
                    <div className="media-icons">
                        <a href="#" target="_blank">
                            <i className="fa-brands fa-x-twitter"></i>
                        </a>
                        <a href="#">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="#" target="_blank">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>

            <p>Created by Halic&copy;2023</p>
        </footer>
    )
}

export default Footer