import {Link} from "react-router-dom";

const HeaderTop = () => {
    return (
        <div>
            <div className="top-header">
                <div className="container-custom">
                    <div className="row align-items-center">
                        <div className="col-md-6"></div>
                        <div className="col-md-6">
                            <div className="d-flex align-items-center justify-content-end">
                                <div className="social-icons me-4">
                                    <Link to={''} className="fab fa-telegram-plane"></Link>
                                    <Link to={''} className="fab fa-instagram"></Link>
                                </div>
                                <div>
                                    <i className="fas fa-phone-alt me-2"></i>
                                    <a href="tel:+998901234567">+998 90 123 45 67</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;