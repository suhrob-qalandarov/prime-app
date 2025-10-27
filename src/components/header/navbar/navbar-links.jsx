import { NavLink } from "react-router-dom"

const NavbarLinks = () => {
    const links = [
        { to: "/catalog", label: "KATALOG" },
        { to: "/about-us", label: "BIZ HAQIMIZDA" },
        { to: "/contact", label: "KONTAKTLAR" },
    ]

    return (
        <div className="hidden lg:flex col-span-6 justify-start">
            <ul className="flex gap-4 list-none m-0 p-0">
                {links.map(({ to, label }) => (
                    <li key={to}>
                        <NavLink
                            to={to}
                            className={({ isActive }) => `
                                relative px-5 py-1 font-bold text-[#8b1538] 
                                transition-all duration-300 rounded-lg text-sm
                                no-underline
                                ${isActive ? "text-black" : "hover:text-black"}
                                after:content-[''] after:absolute after:bottom-[-4px] after:left-1/2 
                                after:w-0 after:h-0.5 after:bg-[#a01b47] after:transition-all 
                                after:duration-300 after:-translate-x-1/2 after:rounded-sm
                                hover:after:w-[70%]
                            `}
                        >
                            {label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NavbarLinks
