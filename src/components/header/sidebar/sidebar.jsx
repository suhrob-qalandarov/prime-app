"use client"

import { NavLink } from "react-router-dom"
import "./sidebar.css"

const Sidebar = ({ isOpen, onClose }) => {
    const links = [
        { to: "/catalog", label: "KATALOG" },
        { to: "/about-us", label: "BIZ HAQIMIZDA" },
        { to: "/contact", label: "KONTAKTLAR" },
    ]

    return (
        <>
            {/* Overlay */}
            <div className={`sidebar-overlay ${isOpen ? "active" : ""}`} onClick={onClose}></div>

            {/* Sidebar */}
            <div className={`sidebar ${isOpen ? "open" : ""}`}>
                <div className="sidebar-header">
                    <h2 className="sidebar-logo">
                        PRIME<span>77</span>
                    </h2>
                    <button className="sidebar-close" onClick={onClose}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                <nav className="sidebar-nav">
                    <ul className="sidebar-links">
                        {links.map(({ to, label }) => (
                            <li key={to}>
                                <NavLink
                                    to={to}
                                    className={({ isActive }) => `sidebar-link ${isActive ? "active" : ""}`}
                                    onClick={onClose}
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Sidebar
