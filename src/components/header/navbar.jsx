import {Link} from "react-router-dom";
import NavbarIcons from "./navbar/navbar-icons";
import NavbarLinks from "./navbar/navbar-links";
import './navbar.css'
import {Stack} from "@mui/material";
import BottomNavbar from "./bottom/bottom-navbar";
import {useState} from "react";
import {CartIcon} from "../../icons";
import CartModal from "../modals/cart-modal";

const Navbar = () => {
    const [cartCount, setCartCount] = useState(0)
    const [modal, setModal] = useState(null);

    const handleCartClick = () => {
        setModal('cart')
    }

    const handleCategoriesClick = () => {
        console.log("Categories clicked from bottom nav")
    }

    const handleSearchClick = () => {
        console.log("Search clicked from bottom nav")
    }

    const handleMessageClick = () => {
        console.log("Message clicked from bottom nav")
    }

    return (
        <>
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
                                        letterSpacing: "1px",
                                        color: "rgba(198,176,33,0.95)"
                                    }}
                                >
                                    PRIME
                                    <span style={{
                                        color: "rgba(160,27,71,0.9)"
                                    }}
                                    >
                                77
                            </span>
                                </h1>
                            </Link>
                            <NavbarLinks/>
                            <NavbarIcons/>
                        </div>
                    </div>
                </div>
            </Stack>
            <BottomNavbar
                cartCount={cartCount}
                onCartClick={handleCartClick}
                onCategoriesClick={handleCategoriesClick}
                onSearchClick={handleSearchClick}
                onMessageClick={handleMessageClick}
            />
            <CartModal isOpen={modal === 'cart'} onClose={() => setModal(null)} />
        </>
    );
};

export default Navbar;
