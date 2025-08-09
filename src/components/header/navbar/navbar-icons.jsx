import {Link} from "react-router-dom";
import {useState} from "react";
import SearchModal from "../../modals/search-modal";
import CartModal from "../../modals/cart-modal";

const NavbarIcons = () => {
    const [searchOpen, setSearchOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);

    return (
        <>
            <div className="col-lg-3">
                <div className="d-flex justify-content-end align-items-center">
                    <div className="header-icons">
                        <Link to={'?searchModalOpen'} className="header-icon" onClick={(e) => { e.preventDefault(); setSearchOpen(true); }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                viewBox="0 0 256 256"
                            >
                                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                            </svg>
                        </Link>

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

                        <Link to={'?cartModalOpen'} className="header-icon" onClick={(e) => { e.preventDefault(); setCartOpen(true); }}>
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
                        </Link>
                    </div>
                </div>
            </div>

            <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
            <CartModal isOpen={cartOpen} onClose={() => setCartOpen(false)} />
        </>
    );
};

export default NavbarIcons;
