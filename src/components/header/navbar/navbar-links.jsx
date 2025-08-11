import React from 'react';
import {Link, NavLink} from "react-router-dom";
import "./navbar-links.css";

const NavbarLinks = () => {
    const links = [
        { to: "/catalog", label: "KATALOG" },
        { to: "/about-us", label: "BIZ HAQIMIZDA" },
        { to: "/contact", label: "KONTAKTLAR" }
    ];

    return (
        <div className="col-lg-6">
            <nav className="navbar navbar-expand-lg">
                <div className="collapse navbar-collapse justify-content-start">
                    <ul className="navbar-nav">
                        {links.map(({ to, label }) => (
                            <li className="nav-item" key={to}>
                                <NavLink
                                    to={to}
                                    className={({ isActive }) =>
                                        `nav-link ${isActive ? "active" : ""}`
                                    }
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavbarLinks;