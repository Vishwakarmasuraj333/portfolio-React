import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function Footer() {
    return (

        <footer className="footer">
         <hr className="Hr-line" />

            <br /><br />
            <div className="footer-container">

                {/* About */}
                <div className="footer-section">

                    <h3>About Me</h3>
                    <p>
                        I'm a passionate Frontend Developer building modern,
                        responsive and user-friendly web applications using
                        React and latest technologies.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#blogs">Blogs</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>Email: itxsuraj@gmail.com</p>
                    <p>Phone: +91 9370944696</p>

                    <div className="social-icons">
                        <a href="https://www.facebook.com/share/16a5Gdy654/" target="_blank"><FaFacebook /></a>
                        <a href="https://www.instagram.com/surajvishwakarma_bittu?igsh=NXlyNHBrbjNvbGJ0&utm_source=ig_contact_invite" target="_blank"><FaInstagram /></a>
                        <a href="https://www.linkedin.com/in/suraj-vishwakarma-2ab64436a/" target="_blank"><FaLinkedin /></a>
                        <a href="https://github.com/Vishwakarmasuraj333" target="_blank"><FaGithub /></a>
                        <a href="#" target="_blank"><FaTwitter /></a>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© 2026 Suraj. All rights reserved.</p>
            </div>

        </footer>
    );
}

export default Footer;
