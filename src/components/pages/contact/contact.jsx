
import './contact.css'
import {Container, Stack} from "@mui/material";

const Contact = () => {
    return (
        <Stack className="contact-page">
            <Stack className="page-header">
                <Container>
                    <div className="page-header-content">
                        <h1 className="page-title">Biz bilan bog'lanish</h1>
                        <nav className="breadcrumb-nav">
                            <a href="/index.html" className="breadcrumb-link">Asosiy</a>
                            <span className="breadcrumb-separator">/</span>
                            <span className="breadcrumb-current">Biz bilan bog'lanish</span>
                        </nav>
                    </div>
                </Container>
            </Stack>

            <Stack className="contact-info-section">
                <Container>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-section">
                                <h3 className="section-title">Kontaktlar</h3>
                                <div className="contact-content">
                                    <i className="fab fa-telegram-plane"></i>
                                    <span>Telegram:
                                <a href="https://t.me/prime77_fam" target="_blank" rel="noreferrer">@prime77_fam</a>
                            </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="contact-section">
                                <h3 className="section-title">Bizning do'konlar</h3>
                                <div className="contact-content">
                                    <div className="store-coming-soon">
                                        <span>Tez orada...</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="contact-section">
                                <h3 className="section-title">Ishlash vaqtlari</h3>
                                <div className="contact-content">
                                    <div className="working-hours">
                                        <span>Har kuni: 10:00 - 20:00 GMT+5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Stack>
        </Stack>
    );
};

export default Contact;