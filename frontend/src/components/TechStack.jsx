import Slider from 'react-slick';
import '../styles/TechStack.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

//icon importing
import PythonIcon from './Icons/PythonIcon';
import PytorchIcon from './Icons/PytorchIcon';
import HtmlIcon from './Icons/HtmlIcon';
import CssIcon from './Icons/CssIcon';
import JavaScriptIcon from './Icons/JavaScriptIcon';
import TensorflowIcon from './Icons/TensorflowIcon';
import FastapiIcon from './Icons/FastapiIcon';
import JupyterIcon from './Icons/JupyterIcon';
import FedoraIcon from './Icons/FedoraIcon';
import PycharmIcon from './Icons/PycharmIcon';
import UnityIcon from './Icons/UnityIcon';
import VscodeIcon from './Icons/VScodeIcon';
import MySQLIcon from './Icons/MySQLIcon';

const techStack = [
  { name: 'Python', icon: <PythonIcon/>, color: 'var(--blue1)' },
  { name: 'Pytorch', icon: <PytorchIcon/>, color: 'var(--orange1)' },
  { name: 'Fastapi', icon: <FastapiIcon/>, color: 'var(--blue1)' },
  { name: 'Tensorflow', icon: <TensorflowIcon/>, color: 'var(--orange1)' },
  { name: 'PyCharm', icon: <PycharmIcon/>, color: 'var(--green2)' },
  { name: 'Jupyter', icon: <JupyterIcon/>, color: 'var(--orange2)' },
  { name: 'VSCode', icon: <VscodeIcon/>, color: 'var(--blue1)' },
  { name: 'MySQL', icon: <MySQLIcon/>, color: 'var(--aqua1)' },
  { name: 'HTML', icon: <HtmlIcon/>, color: 'var(--orange1)' },
  { name: 'CSS', icon: <CssIcon/>, color: 'var(--blue2)' },
  { name: 'Java Script', icon: <JavaScriptIcon/>, color: 'var(--yellow2)' },
  { name: 'Fedora', icon: <FedoraIcon/>, color: 'var(--blue1)' },
  { name: 'Unity', icon: <UnityIcon/>, color: 'var(--gray1)' },
];

const TechStack = () => {

  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 6, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, 
    pauseOnHover: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 640, 
        settings: {
          slidesToShow: 5, 
        },
      },
      {
        breakpoint: 540, 
        settings: {
          slidesToShow: 4, 
        },
      },
    ],
  };

  return (
    <>
      <div className='box'>
      <p className='skills-text'>Tech stack</p>
        <div className="tech-stack-container">
          <Slider {...settings}>
            {techStack.map((tech, index) => (
              <div key={index} className="tech-item-wrapper">
                <div className="tech-item">
                  {tech.icon}
                  <span className="tech-name" style={{'--hover-color': tech.color}}>{tech.name}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default TechStack;
