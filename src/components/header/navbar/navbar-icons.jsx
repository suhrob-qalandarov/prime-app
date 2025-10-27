import { Link } from "react-router-dom"
import { useState } from "react"
import SearchModal from "../../modals/search-modal"
import CartModal from "../../modals/cart-modal"
import { SearchIcon, ProfileIcon, CartIcon } from "../../../icons"

const NavbarIcons = () => {
    const [modal, setModal] = useState(null)
    const isLoggedIn = Boolean(localStorage.getItem("prime-token"))

    return (
        <>
            <div className="hidden lg:flex col-span-3">
                <div className="flex justify-end items-center w-full">
                    <div className="flex items-center gap-4">
                        <button
                            className="p-2 text-[#8b1538]"
                            onClick={() => setModal("search")}
                        >
                            <SearchIcon />
                        </button>

                        <span className="text-[#8b1538] text-3xl font-light">|</span>

                        <Link
                            to={isLoggedIn ? "/profile" : "/login"}
                            className="p-2 text-[#8b1538] no-underline"
                        >
                            <ProfileIcon />
                        </Link>

                        <button
                            className="p-2 text-[#8b1538] relative"
                            onClick={() => setModal("cart")}
                        >
                            <CartIcon />
                            <span
                                className="absolute top-0 right-1 bg-[#a01b47] text-white text-xs rounded-full w-4 h-5 flex items-center justify-center font-semibold"
                                id="cartBadge"
                            >
                                0
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <SearchModal isOpen={modal === "search"} onClose={() => setModal(null)} />
            <CartModal isOpen={modal === "cart"} onClose={() => setModal(null)} />
        </>
    )
}

export default NavbarIcons
