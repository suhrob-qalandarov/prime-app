import {payments} from '../../constants';
import {Link} from "react-router-dom";
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <Link to={'/'} className="col-lg-3" style={{textDecoration: "none"}}>
                        <h1
                            style={{
                                fontWeight: 700,
                                fontSize: "24px",
                                margin: 0,
                                color: "rgba(195,164,9,0.84)"
                            }}
                        >
                            PRIME<span style={{color: "#ff6b6b"}}>77</span>
                        </h1>
                    </Link>

                    <div className="col-lg-2 col-md-6 col-6 mb-4">
                        <h3 className="footer-title">KOMPANIYA</h3>
                        <ul className="footer-links">
                            <li>
                                <Link to={'/about-us'}>
                                    Biz haqimizda
                                </Link>
                            </li>
                            <li>
                                <Link to={'/'}>
                                    Biz bilan bog'lanish
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-6 col-6 mb-4">
                        <h3 className="footer-title">QO'LLAB-QUVVATLASH</h3>
                        <ul className="footer-links">
                            <li>
                                <Link to={'/'}>
                                    Yetkazib berish
                                </Link>
                            </li>
                            <li>
                                <Link to={'/'}>
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-6 col-6 mb-4">
                        <h3 className="footer-title">IJTIMOIY TARMOQLAR</h3>
                        <div className="social-links">
                            <Link to={''} className="social-link">
                                <i className="fab fa-telegram-plane" aria-hidden="true"></i>
                                <span>Telegram</span>
                            </Link>
                            <Link to={''} className="social-link">
                                <i className="fab fa-instagram" aria-hidden="true"></i>
                                <span>Instagram</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="row">
                        <div className="col-md-6" sx={{textDecoration: "none"}}>
                            <p>&copy; 2025 PRIME77, Barcha huquqlar himoyalangan</p>
                        </div>
                        <div className="col-md-6 d-none d-md-block">
                            <div className="payment-methods">
                                <span>To'lov turlari:</span>
                                <div className="payment-images">
                                    {payments.map((payment) => (
                                        <img
                                            key={payment.name}
                                            src={payment.image}
                                            alt={payment.name}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
