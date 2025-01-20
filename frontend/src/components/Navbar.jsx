import { useState, useEffect } from "react";
import { useTheme } from '../ThemeContext';  
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

const Navbar = () => {
    const { theme, setTheme } = useTheme();  
    const location = useLocation(); 
    const [iconAnimating, setIconAnimating] = useState(false);
    const [currentIcon, setCurrentIcon] = useState(theme === 'dark' ? faSun : faMoon);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const getCurrentPathText = () => {
        switch (location.pathname) {
            case '/about':
                return '<About>';
            case '/projects':
                return '<Projects>';
            default:
                return '<Home>';
        }
    };

    const getCurrentPathClass = () => {
        switch (location.pathname) {
            case '/about':
                return 'current-path-about';
            case '/projects':
                return 'current-path-projects';
            default:
                return 'current-path-home';
        }
    };

    const toggleTheme = () => {
        if (!iconAnimating) {
            setIconAnimating(true);
            const newTheme = theme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);  
            localStorage.setItem('theme', newTheme);
            setTimeout(() => {
                setCurrentIcon(newTheme === 'dark' ? faSun : faMoon);  
            }, 300);
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (iconAnimating) {
            const timeout = setTimeout(() => {
                setIconAnimating(false);
            }, 700);
            return () => clearTimeout(timeout);
        }
    }, [iconAnimating]);

    useEffect(() => {
        setCurrentIcon(theme === 'dark' ? faSun : faMoon);  
    }, [theme]);

    return (
        <header>
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className={`current-path ${getCurrentPathClass()}`}>
                    <Link to="/" className="link">{getCurrentPathText()}</Link>  
                </div>
                <div className="right">
                    <div className="menu-toggle" onClick={toggleMenu}>
                        <span className="menu-icon">
                            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                        </span>
                    </div>
                    <div className={`links ${isMenuOpen ? 'open' : ''}`}>
                        <Link to="/" className="link" onClick={closeMenu}>Home</Link>
                        <Link to="/about" className="link" onClick={closeMenu}>About</Link>
                        <Link to="/projects" className="link" onClick={closeMenu}>My projects</Link>
                    </div>
                    <div className="theme-toggle" onClick={toggleTheme}>
                        <span className="theme-icon">
                            <FontAwesomeIcon
                                icon={currentIcon}
                                className={`${iconAnimating ? (theme === 'dark' ? 'sun-icon' : 'moon-icon') : ''}`}
                            />
                        </span>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
