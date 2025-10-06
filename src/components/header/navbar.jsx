"use client"

import {Link, useNavigate} from "react-router-dom"
import NavbarIcons from "./navbar/navbar-icons"
import NavbarLinks from "./navbar/navbar-links"
import "./navbar.css"
import { Stack } from "@mui/material"
import BottomNavbar from "./bottom/bottom-navbar"
import { useState } from "react"
import CartModal from "../modals/cart-modal"
import Sidebar from "./sidebar/sidebar" // Added sidebar import

const Navbar = () => {
    const [cartCount, setCartCount] = useState(0)
    const [modal, setModal] = useState(null)
    const [sidebarOpen, setSidebarOpen] = useState(false) // Added sidebar state
    const navigate = useNavigate()

    const handleCartClick = () => {
        setModal("cart")
    }

    const handleCategoriesClick = () => {
        navigate("/catalog")
    }

    const handleSearchClick = () => {
        console.log("Search clicked from bottom nav")
    }

    const handleProfileClick = () => {
        // Changed from handleMessageClick to handleProfileClick
        console.log("Profile clicked from bottom nav")
    }

    const toggleSidebar = () => {
        // Added sidebar toggle function
        setSidebarOpen(!sidebarOpen)
    }

    return (
        <>
            <Stack className="container" style={{ backgroundColor: "#f0f0f0" }}>
                <div
                    className="main-header"
                    id="main-header"
                    sx={{
                        position: "sticky",
                        top: 0,
                        zIndex: 999,
                    }}
                >
                    <div className="container-custom">
                        <div className="row align-items-center">
                            <div className="mobile-menu-toggle" onClick={toggleSidebar}>
                                <div className="hamburger">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>

                            <Link to={"/"} className="col-lg-3 logo-container" style={{ textDecoration: "none" }}>
                                <h1
                                    id="main-logo"
                                    style={{
                                        fontWeight: 700,
                                        fontSize: "24px",
                                        margin: 0,
                                        letterSpacing: "1px",
                                        color: "rgba(198,176,33,0.95)",
                                    }}
                                >
                                    PRIME
                                    <span
                                        style={{
                                            color: "rgba(160,27,71,0.9)",
                                        }}
                                    >
                    77
                  </span>
                                </h1>
                            </Link>
                            <NavbarLinks />
                            <NavbarIcons />
                        </div>
                    </div>
                </div>
            </Stack>

            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <BottomNavbar
                cartCount={cartCount}
                onCartClick={handleCartClick}
                onCategoriesClick={handleCategoriesClick}
                onSearchClick={handleSearchClick}
                onProfileClick={handleProfileClick} // Changed from onMessageClick to onProfileClick
            />
            <CartModal isOpen={modal === "cart"} onClose={() => setModal(null)} />
        </>
    )
}

export default Navbar
