"use client"

import { useState } from "react"
import "./bottom-navbar.css"

const BottomNavbar = ({ cartCount = 0, onCartClick, onCategoriesClick, onSearchClick, onMessageClick }) => {
    const [activeItem, setActiveItem] = useState("")

    const handleItemClick = (itemName, callback) => {
        setActiveItem(itemName)
        if (callback) callback()
    }

    return (
        <div className="mobile-bottom-nav">
            <div
                className={`bottom-nav-item ${activeItem === "categories" ? "active" : ""}`}
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
                <span>Kategoriyalar</span>
            </div>

            <div
                className={`bottom-nav-item ${activeItem === "cart" ? "active" : ""}`}
                onClick={() => handleItemClick("cart", onCartClick)}
            >
                <div className="bottom-nav-icon-container">
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
                    <div className={`bottom-nav-badge ${cartCount > 0 ? "show" : ""}`}>{cartCount}</div>
                </div>
                <span>Savat</span>
            </div>

            <div
                className={`bottom-nav-item ${activeItem === "search" ? "active" : ""}`}
                onClick={() => handleItemClick("search", onSearchClick)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
                <span>Qidirish</span>
            </div>

            <div
                className={`bottom-nav-item ${activeItem === "message" ? "active" : ""}`}
                onClick={() => handleItemClick("message", onMessageClick)}
            >
                <svg fill="currentColor" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"></path>
                    <path d="M0 0h24v24H0z" fill="none"></path>
                </svg>
                <span>Xabar</span>
            </div>
        </div>
    )
}

export default BottomNavbar
