import { Link } from "react-router-dom";
import { useState } from "react";
import SearchModal from "../../modals/search-modal";
import CartModal from "../../modals/cart-modal";
import { Box, Stack, Typography } from "@mui/material";
import { SearchIcon, ProfileIcon, CartIcon } from "../../../icons";
import "./navbar-icons.css";

const NavbarIcons = () => {
    const [modal, setModal] = useState(null);
    const isLoggedIn = Boolean(localStorage.getItem("prime-token"));

    return (
        <>
            <Stack className="col-lg-3">
                <Box className="d-flex justify-content-end align-items-center">
                    <Typography className="header-icons">
                        <button className="header-icon" onClick={() => setModal('search')}>
                            <SearchIcon />
                        </button>

                        <span className="header-separator">|</span>

                        <Link
                            to={isLoggedIn ? "/profile" : "/login"}
                            className="header-icon header-icon-profile"
                        >
                            <ProfileIcon />
                        </Link>

                        <button className="header-icon" onClick={() => setModal('cart')}>
                            <CartIcon />
                            <span className="badge" id="cartBadge">0</span>
                        </button>
                    </Typography>
                </Box>
            </Stack>

            <SearchModal isOpen={modal === 'search'} onClose={() => setModal(null)} />
            <CartModal isOpen={modal === 'cart'} onClose={() => setModal(null)} />
        </>
    );
};

export default NavbarIcons;
