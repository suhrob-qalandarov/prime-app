import {Route, Routes} from "react-router-dom";
import {Main, Login, Catalog, AboutUs, Contact, HeaderTop, Navbar, Footer, Home} from "./components/index";

const App = () => {
    return (
        <div>
            <HeaderTop />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/catalog" element={ <Catalog /> }/>
                <Route path="/about-us" element={ <AboutUs /> }/>
                <Route path="/contact" element={ <Contact /> }/>
                <Route path="/login" element={ <Login /> }/>
            </Routes>
            <Footer />
        </div>
    )
}

export default App;