import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
    return (
        <div className="layout">
            <Navbar/>

            <div className="content">
                {children}
            </div>

            <Footer/>
        </div>
    )
}

export default Layout;