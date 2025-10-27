import { Link, useNavigate } from "react-router-dom"
import NavbarIcons from "./navbar/navbar-icons"
import NavbarLinks from "./navbar/navbar-links"
import { Stack } from "@mui/material"
import BottomNavbar from "./bottom/bottom-navbar"
import { useState } from "react"
import CartModal from "../modals/cart-modal"
import Sidebar from "./sidebar/sidebar"

const Navbar = () => {
    const [cartCount, setCartCount] = useState(0)
    const [modal, setModal] = useState(null)
    const [sidebarOpen, setSidebarOpen] = useState(false)
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
        console.log("Profile clicked from bottom nav")
    }

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    return (
        <>
            <Stack className="bg-[#f8f9fb] w-full">
                <div
                    className="fixed top-5 left-0 right-0 z-[999] transition-all duration-300 w-full bg-[#f8f9fb]"
                >
                    <div className="px-6 lg:px-[80px]">
                        <div className="flex items-center justify-between h-20">
                            <div className="lg:hidden cursor-pointer p-2.5 z-[1000]" onClick={toggleSidebar}>
                                <div className="flex flex-col gap-1">
                                    <span className="w-[25px] h-[3px] bg-[#8b1538] rounded-sm transition-all duration-300"></span>
                                    <span className="w-[25px] h-[3px] bg-[#8b1538] rounded-sm transition-all duration-300"></span>
                                    <span className="w-[25px] h-[3px] bg-[#8b1538] rounded-sm transition-all duration-300"></span>
                                </div>
                            </div>

                            <Link to={"/"} className="no-underline flex-shrink-0">
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
                onProfileClick={handleProfileClick}
            />
            <CartModal isOpen={modal === "cart"} onClose={() => setModal(null)} />
        </>
    )
}

export default Navbar
