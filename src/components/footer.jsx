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
                    <h3>services</h3>
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