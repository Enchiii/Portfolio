import TechStack from "../components/TechStack";
import '../styles/Home.css'

const Home = () => {
    return (
        <>
        {/* <p className="motto">Linux is only free if your time has no value.</p> */}
        <p className="motto">Code with purpose, create with passion</p>

        <div className="about">
            <p>Hi, I&apos;m Eryk – a high school student from Kraków, interested in AI and problem-solving.</p>
            <p>I&apos;m excited about exploring new possibilities in artificial intelligence and using them to create innovative solutions.
                In addition to programming, I am interested in chess, bouldering and skiing - activities that enhance my strategic thinking, 
                focus and perseverance. These are qualities that help me in any project.</p>
            <p>I believe that together, we can create something amazing.</p>
        </div>

        <TechStack/>
        </>
    )
}

export default Home;
