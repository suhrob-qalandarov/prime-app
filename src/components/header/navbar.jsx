import {Link} from "react-router-dom";
import NavbarIcons from "./navbar/navbar-icons";
import NavbarLinks from "./navbar/navbar-links";
import './navbar.css'
import {Stack} from "@mui/material";

const Navbar = () => {
    return (
        <Stack className='container' style={{backgroundColor: "#f0f0f0"}}>
            <div className="main-header" id="main-header"
                 sx={{
                     position: 'sticky',
                     top: 0,
                     zIndex: 999
                 }}>
                <div className="container-custom">
                    <div className="row align-items-center">
                        <Link to={'/'} className="col-lg-3" style={{textDecoration: "none"}}>
                            <h1
                                id="main-logo"
                                style={{
                                    fontWeight: 700,
                                    fontSize: "24px",
                                    margin: 0,
                                    color: "rgba(195,164,9,0.84)"
                                }}
                            >
                                PRIME<span style={{color: "#ff6b6b"}}>77</span>
                            </h1>
                        </Link>
                        <NavbarLinks/>
                        <NavbarIcons/>
                    </div>
                </div>
            </div>
        </Stack>
    );
};

export default Navbar;
