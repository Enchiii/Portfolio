// import React from "react";
import '../styles/About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import avatar1 from '../assets/avatar1.png';
import logo from '../assets/logo.png';
// import avatar2 from '../assets/avata3.png';

const About = () => {
    const copyEmailToClipboard = () => {
        const email = "eryktobiasz2006@gmail.com";
        navigator.clipboard.writeText(email).then(() => {
            alert(`Email ${email} has been copied to clipboard!`);
        }).catch(err => {
            console.error('Failed to copy email: ', err);
        });
    };
    return (
        <>
            <div className="header">
                <div className="left">
                    <p className="name">Eryk Tobiasz</p>
                    <p className="info">AI Engineer at <span>Kraków</span></p>
                </div>
                <div className="avatar">
                    <img src={avatar1} alt="avatar" />
                </div>
            </div>
            <div className="container">
                <h3>Hello!</h3>
                <p>I&apos;m a self-taught developer from Cracow interested in AI. I love learning about artificial intelligence and using it to create new and useful solutions.</p>
                <p>I have been interested in programming for several years, and AI is what I focus on the most. I love discovering new AI capabilities and using them to create innovative solutions. In addition to programming, I am passionate about chess, skiing, and bouldering, which help me develop strategic thinking, concentration, and perseverance, qualities that help me in every project I work on.</p>
                <p>I&apos;m currently working with friends on a hack and slash game in Unity using the C# language. I&apos;m responsible for the mechanics and physics of the game, including player movement, combat mechanics, and ensuring smooth and responsive gameplay. I also focus on making sure the game interactions are natural and engaging for the player.
                </p>
                <div className="list">
                    <h4>My technical expertise includes:</h4>
                    <ul>
                        <li>Programming languages: Python, JavaScript</li>
                        <li>Frameworks: PyTorch, FastAPI</li>
                        <li>Tools and platforms: PyCharm, GitHub, SQL, Fedora, Windows</li>
                    </ul>
                </div>
                <p>My goal is to work on the development of artificial intelligence and projects that have a real impact on society. I am also open to collaborating on interesting projects that push the boundaries of what is possible.</p>
                <p>Thank you for taking the time to get to know me and feel free to contact me. </p>
            </div>

            <div className="education">
                <h3>Education</h3>
                <div className="item">
                    <img src={logo} alt='logo'/>
                    <div className='right'>
                        <p>Zespół Szkół Elektrycznych nr 1 im. Powstańców Śląskich w Krakowie</p>
                        <p>Technik programista</p>
                    </div>
                </div>
            </div>

            <div className="contact">
                <h3>Contact</h3>
                <div className="social-icons">
                    <a onClick={copyEmailToClipboard} href="mailto:eryktobiasz2006@gmail.com" target='_blank' className="link">
                        <FontAwesomeIcon icon={faEnvelope} /> <span>Email: <span>eryktobiasz2006@gmail.com</span></span>
                    </a>
                    <a href="https://github.com/Enchiii" target='_blank' className="link">
                        <FontAwesomeIcon icon={faGithub} /> <span>Github: <span>Enchiii</span></span>
                    </a>
                    <a href="https://www.facebook.com/eryk.tobiasz.1" target='_blank' className="link">
                        <FontAwesomeIcon icon={faFacebook} /> <span>Facebook: <span>Eryk Tobiasz</span></span>
                    </a>
                    <a href="https://www.instagram.com/enchi.i/" target='_blank' className="link">
                        <FontAwesomeIcon icon={faInstagram} /> <span>Instagram: <span>enchi.i</span></span>
                    </a>
                    <a href="https://www.linkedin.com/in/eryk-tobiasz-8a87392a4/" target='_blank' className="link">
                        <FontAwesomeIcon icon={faLinkedin} /> <span>LinkedIn: <span>Eryk Tobiasz</span></span>
                    </a>
                </div>
            </div>
        </>
    );
};

export default About;

