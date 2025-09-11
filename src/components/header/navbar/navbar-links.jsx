import { NavLink } from "react-router-dom"
import "./navbar-links.css"
import { Stack } from "@mui/material"

const NavbarLinks = () => {
    const links = [
        { to: "/catalog", label: "KATALOG" },
        { to: "/about-us", label: "BIZ HAQIMIZDA" },
        { to: "/contact", label: "KONTAKTLAR" },
    ]

    return (
        <Stack className="col-lg-6">
            <Stack className="navbar navbar-expand-lg">
                <div className="collapse navbar-collapse justify-content-start">
                    <ul className="navbar-nav">
                        {links.map(({ to, label }) => (
                            <li className="nav-item" key={to}>
                                <NavLink to={to} className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </Stack>
        </Stack>
    )
}

export default NavbarLinks
