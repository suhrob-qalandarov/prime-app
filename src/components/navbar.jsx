import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div class = 'container' className="main-header" id="main-header"
             sx={{position: 'sticky',
            top: 0,
            zIndex: 999}}>
            <div className="container-custom">
                <div className="row align-items-center">
                    <Link to={'/'} className="col-lg-3">
                        <h1
                            id="main-logo"
                            style={{
                                fontWeight: 700,
                                fontSize: "24px",
                                margin: 0,
                                color: "rgba(195,164,9,0.84)",
                            }}
                        >
                            PRIME<span style={{ color: "#ff6b6b" }}>77</span>
                        </h1>
                    </Link>

                    <div class="col-lg-6">
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

                    <div className="col-lg-3">
                        <div className="d-flex justify-content-end align-items-center">
                            <div className="header-icons">
                                <a href="#" className="header-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        viewBox="0 0 256 256"
                                    >
                                        <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                                    </svg>
                                </a>

                                <span className="header-separator">|</span>

                                <Link
                                    to={localStorage.getItem("prime-token") ? "/profile" : "/login"}
                                    className="header-icon header-icon-profile"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        viewBox="0 0 256 256"
                                    >
                                        <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
                                    </svg>
                                </Link>

                                <div className="position-relative">
                                    <a href="#" className="header-icon" id="cartIcon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="currentColor"
                                            viewBox="0 0 256 256"
                                        >
                                            <path d="M239.89,198.12l-14.26-120a16,16,0,0,0-16-14.12H176a48,48,0,1,0-96,0H46.33a16,16,0,0,0-16,14.12l-14.26,120A16,16,0,0,0,20,210.6a16.13,16.13,0,0,0,12,5.4H223.92A16.13,16.13,0,0,0,236,210.6,16,16,0,0,0,239.89,198.12ZM128,32a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32ZM32,200,46.33,80H80v24a8,8,0,0,0,16,0V80h64v24a8,8,0,0,0,16,0V80h33.75l14.17,120Z"></path>
                                        </svg>
                                        <span className="badge" id="cartBadge">0</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
