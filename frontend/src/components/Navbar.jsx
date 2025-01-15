import { useState, useEffect } from "react";
import { useTheme } from '../ThemeContext';  
import { Link } from 'react-router-dom';
import sunIcon from '../assets/sun1.png';
import moonIcon from '../assets/moon1.png';
import '../styles/Navbar.css';

const Navbar = () => {
    const { theme, setTheme } = useTheme();  
    const [iconAnimating, setIconAnimating] = useState(false);
    const [currentIcon, setCurrentIcon] = useState(theme === 'dark' ? moonIcon : sunIcon);

    const toggleTheme = () => {
        if (!iconAnimating) {
          setIconAnimating(true);
          setTheme(theme === 'dark' ? 'light' : 'dark');  
          localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
          setTimeout(() => {
            setCurrentIcon(theme === 'dark' ? sunIcon : moonIcon);  
          }, 300); // Po 300ms zmieniamy ikonę
        }
    };

    useEffect(() => {
        if (iconAnimating) {
          const timeout = setTimeout(() => {
            setIconAnimating(false);
          }, 700); // Czas trwania animacji plus lekki delay
          return () => clearTimeout(timeout);
        }
    }, [iconAnimating]);

    useEffect(() => {
        setCurrentIcon(theme === 'dark' ? moonIcon : sunIcon);  
    }, [theme]);

    return (
        <nav className="navbar">
            <div className="current-path">
                <Link to="/">&lt;Home&gt;</Link>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">My projects</Link>
            </div>
            <div className="theme-toggle">
                <div onClick={toggleTheme}>
                    <img
                        src={currentIcon}
                        alt="Theme Icon"
                        className={`theme-icon ${iconAnimating ? (theme === 'dark' ? 'moon-icon' : 'sun-icon') : ''}`}
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
