import { useState } from "react"
import { Link } from "react-router-dom"

const BottomNavbar = ({ cartCount = 0, onCartClick, onCategoriesClick, onSearchClick, onProfileClick }) => {
    const [activeItem, setActiveItem] = useState("")
    const isLoggedIn = Boolean(localStorage.getItem("prime-token"))

    const handleItemClick = (itemName, callback) => {
        setActiveItem(itemName)
        if (callback) callback()
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#8b1538] flex justify-around items-center p-0 z-[1025] lg:hidden">
            <div
                className={`flex flex-col items-center gap-0 cursor-pointer p-2 rounded-lg transition-all duration-300 text-[#8b1538] min-w-[70px] ${
                    activeItem === "categories" ? "bg-gray-100" : ""
                }`}
                onClick={() => handleItemClick("categories", onCategoriesClick)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M3 9h18"></path>
                    <path d="M3 15h18"></path>
                    <path d="M9 3v18"></path>
                    <path d="M15 3v18"></path>
                </svg>
                <span className="text-xs font-medium text-center leading-none">Kategoriyalar</span>
            </div>

            <div
                className={`flex flex-col items-center gap-0 cursor-pointer p-3 rounded-lg transition-all duration-300 text-[#8b1538] min-w-[70px] ${
                    activeItem === "cart" ? "bg-gray-100" : ""
                }`}
                onClick={() => handleItemClick("cart", onCartClick)}
            >
                <div className="relative flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                        <path d="M3 6h18"></path>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                    {cartCount > 0 && (
                        <div className="absolute -top-2 -right-2 bg-black text-white rounded-full w-4.5 h-4.5 text-xs flex items-center justify-center font-semibold">
                            {cartCount}
                        </div>
                    )}
                </div>
                <span className="text-xs font-medium text-center leading-none">Savat</span>
            </div>

            <div
                className={`flex flex-col items-center gap-0 cursor-pointer p-3 rounded-lg transition-all duration-300 text-[#8b1538] min-w-[70px] ${
                    activeItem === "search" ? "bg-gray-100" : ""
                }`}
                onClick={() => handleItemClick("search", onSearchClick)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
                <span className="text-xs font-medium text-center leading-none">Qidirish</span>
            </div>

            <Link
                style={{ textDecoration: "none" }}
                to={isLoggedIn ? "/profile" : "/login"}
                className={`flex flex-col items-center gap-0 cursor-pointer p-2 rounded-lg transition-all duration-300 text-[#8b1538] min-w-[70px] no-underline ${
                    activeItem === "profile" ? "bg-gray-100" : ""
                }`}
                onClick={() => handleItemClick("profile", onProfileClick)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span className="text-xs font-medium text-center leading-none">Profil</span>
            </Link>
        </div>
    )
}

export default BottomNavbar
