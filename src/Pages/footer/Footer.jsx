import './footer.css'

const Footer = () => {
    return (
        <>
            <footer className="footer-box">

                <span className="footer-horizontal">

                    <span className="group">
                        <p className="heading">Quick Links</p>
                        <p className="option">Privacy Policy</p>
                        <p className="option">FAQ</p>
                        <p className="option">Delivery Policies</p>
                    </span>

                    <span className="group">
                        <p className="heading">Store Locations</p>
                        <p className="option">Mumbai</p>
                        <p className="option">New Delhi</p>
                        <p className="option">Jalandhar</p>
                    </span>

                    <span className="group">
                        <p className="heading">Social Links</p>

                        <span className="social-links">
                            <a target="_blank" href="https://www.linkedin.com/in/samarth-krishna-joshi/">
                                <i className="fab fa-linkedin fa-2x">
                                </i>
                            </a>

                            <i className="fab fa-instagram fa-2x"></i>

                            <a target="_blank" href="https://twitter.com/SomeEarthSays">
                                <i className="fab fa-twitter fa-2x"></i>
                            </a>

                            <a target="_blank" href="https://github.com/SomeEarth86">
                                <i className="fab fa-github fa-2x">
                                </i>
                            </a>

                        </span>

                    </span>

                </span>

                <span>
                    <p>All rights reserved to Chessplanet store © 2022 </p>
                </span>

            </footer>
        </>
    )
}

export { Footer }