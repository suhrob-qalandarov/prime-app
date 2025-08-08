
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-6 mb-4">
                        <h1
                            style={{
                                fontWeight: 700,
                                fontSize: "24px",
                                marginBottom: "25px",
                                color: "rgba(195,164,9,0.84)",
                            }}
                        >
                            PRIME<span style={{ color: "#ff6b6b" }}>77</span>
                        </h1>
                    </div>

                    <div className="col-lg-2 col-md-6 col-6 mb-4">
                        <h3 className="footer-title">KOMPANIYA</h3>
                        <ul className="footer-links">
                            <li>
                                <a href="#">Biz bilan bog'lanish</a>
                            </li>
                            <li>
                                <a href="#">Biz haqimizda</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-6 col-6 mb-4">
                        <h3 className="footer-title">QO'LLAB-QUVVATLASH</h3>
                        <ul className="footer-links">
                            <li>
                                <a href="#">Yetkazib berish</a>
                            </li>
                            <li>
                                <a href="#">FAQ</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-6 col-6 mb-4">
                        <h3 className="footer-title">IJTIMOIY TARMOQLAR</h3>
                        <div className="social-links">
                            <a href="#" className="social-link">
                                <i className="fab fa-telegram-plane" aria-hidden="true"></i>
                                <span>Telegram</span>
                            </a>
                            <a href="#" className="social-link">
                                <i className="fab fa-instagram" aria-hidden="true"></i>
                                <span>Instagram</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="row">
                        <div className="col-md-6">
                            <p>&copy; 2024 Prime77. All Rights Reserved.</p>
                        </div>
                        <div className="col-md-6 d-none d-md-block">
                            <div className="payment-methods">
                                <span>To'lov turlari:</span>
                                <div className="payment-images">
                                    <img src="/images/click.webp" alt="Click" />
                                    <img src="/images/payme.webp" alt="Payme" />
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
