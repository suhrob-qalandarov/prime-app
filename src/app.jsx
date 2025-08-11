import {Route, Routes} from "react-router-dom";
import {Login, Catalog, AboutUs, Contact, HeaderTop, Navbar, Footer, Home, Profile} from "./components/index";

const App = () => {
    return (
        <div>
            {/*<HeaderTop />*/}
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/catalog" element={ <Catalog /> }/>
                <Route path="/about-us" element={ <AboutUs /> }/>
                <Route path="/contact" element={ <Contact /> }/>
                <Route path="/login" element={ <Login /> }/>
                <Route path="/profile" element={ <Profile /> }/>
                <Route path="/cart" element={ <Profile /> }/>
                <Route path="/order" element={ <Profile /> }/>
            </Routes>
            <Footer />
        </div>
    )
}

export default App;