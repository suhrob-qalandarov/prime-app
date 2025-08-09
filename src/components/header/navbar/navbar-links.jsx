import React from 'react';
import {Link} from "react-router-dom";

const NavbarLinks = () => {
    return (
        <div className="col-lg-6">
            <nav className="navbar navbar-expand-lg">
                <div className="collapse navbar-collapse justify-content-start">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={'/catalog'} className="nav-link">
                                KATALOG
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/about-us'} className="nav-link">
                                BIZ HAQIMIZDA
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/contact'} className="nav-link">
                                KONTAKTLAR
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavbarLinks;