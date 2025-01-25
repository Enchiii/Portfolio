import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = daysOfWeek[new Date().getDay()];

    const copyEmailToClipboard = () => {
        const email = "eryktobiasz2006@gmail.com";
        navigator.clipboard.writeText(email).then(() => {
            alert(`Email ${email} has been copied to clipboard!`);
        }).catch(err => {
            console.error('Failed to copy email: ', err);
        });
    };

    return (
        <footer>
            <div className="footer-content">
                <div className="left">
                    <div className="icon">
                        <FontAwesomeIcon icon={faLaptopCode} />
                    </div>
                    <div className="text">
                        <p><span style={{ fontSize: '1.3em', color: 'var(--blue1)' }}>&copy;</span> {currentYear} Eryk Tobiasz, <span>Have a nice {currentDay}!</span></p>
                    </div>
                </div>

                <div className="social-icons">
                    <a href="https://github.com/Enchiii" target='_blank' className="link">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.facebook.com/eryk.tobiasz.1" target='_blank' className="link">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://www.instagram.com/enchi.i/" target='_blank' className="link">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.linkedin.com/in/eryk-tobiasz-8a87392a4/" target='_blank' className="link">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a onClick={copyEmailToClipboard} href="mailto:eryktobiasz2006@gmail.com" target='_blank' className="link">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
