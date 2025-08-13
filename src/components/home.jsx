import {categories} from '../constants'
import './home.css';
import {Box, Container, Stack} from "@mui/material";
import {Link} from "react-router-dom";

const Home = () => {

    return (
        <div>
            {/* 3D Hero Showcase Section */}
            <section className="hero-section">
                <div className="hero-3d-showcase">
                    {/* Brand Showcase */}
                    <h1 className="hero-title">BREND KOLLEKSIYASI</h1>
                    <div className="brand-showcase desktop-only">
                        <div className="brand-item loropiana-logo">
                            <img
                                src="https://tw.loropiana.com/on/demandware.static/Sites-loropiana-b2c-sa-Site/-/default/dw00aaaf6a/images/LoroPiana-logo.svg"
                                alt="Loro Piana"
                            />
                        </div>
                        <div className="brand-item polo-logo">
                            <img src="/images/brands/ralphlauren.svg" alt="Polo" />
                        </div>
                        <div className="brand-item louboutin-logo">
                            <img src="/images/brands/louboutin-logo.svg" alt="Louboutin" />
                        </div>
                        <div className="brand-item hermes-logo">
                            <img src="/images/brands/hermes-orange.png" alt="Hermes" />
                        </div>
                        <div className="brand-item lacoste-logo">
                            <img src="/images/brands/lacoste-logo.svg" alt="Hermes" />
                        </div>
                        <div className="brand-item versace-medusa-logo">
                            <img src="/images/brands/versace-medusa-logo.png" alt="Versace" />
                        </div>
                        <div className="brand-item brunello-logo">
                            <img src="/images/brands/brunello_cucinelli-logo.png" alt="Brunello Cucinelli" />
                        </div>
                        <div className="brand-item burberry-logo">
                            <img src="/images/brands/burberry-logo.png" alt="Burberry" />
                        </div>
                        <div className="brand-item balenciaga-logo">
                            <img src="/images/brands/balenciaga-logo.png" alt="Balenciaga" />
                        </div>
                        <div className="brand-item levis-logo">
                            <img src="/images/brands/levis-logo.png" alt="Levi's" />
                        </div>
                        <div className="brand-item moncler-logo">
                            <img src="/images/brands/moncler-logo.jpg" alt="Moncler" />
                        </div>
                        <div className="brand-item dolce-gabbana-logo">
                            <img src="/images/brands/dolce-gabbana-logo.png" alt="Dolce & Gabbana" />
                        </div>
                        <div className="brand-item louis_vuitton-logo">
                            <img src="/images/brands/louis_vuitton-logo.svg" alt="Louis Vuitton" />
                        </div>
                        <div className="brand-item zegna-logo">
                            <img src="/images/brands/zegna-logo.svg" alt="Zegna" />
                        </div>
                    </div>

                    {/* Mobile Brand Carousel */}
                    {/*<div className="mobile-brand-carousel mobile-only">
                        <div className="mobile-brand-track" id="mobileBrandTrack">
                            {[
                                "https://tw.loropiana.com/on/demandware.static/Sites-loropiana-b2c-sa-Site/-/default/dw00aaaf6a/images/LoroPiana-logo.svg",
                                "/images/polo-ralph-lauren.png",
                                "/images/louboutin-logo.svg",
                                "/images/hermes-orange.png",
                                "/images/versace-medusa-logo.png",
                                "/images/brunello_cucinelli-logo.png",
                                "/images/burberry-logo.png",
                                "/images/balenciaga-logo.png",
                                "/images/levis-logo.png",
                                "/images/moncler-logo.jpg",
                                "/images/dolce-gabbana-logo.png",
                                "/images/louis_vuitton-logo.svg",
                                "/images/zegna-logo.svg",
                                // Duplicate items for loop
                                "https://tw.loropiana.com/on/demandware.static/Sites-loropiana-b2c-sa-Site/-/default/dw00aaaf6a/images/LoroPiana-logo.svg",
                                "/images/polo-ralph-lauren.png",
                                "/images/louboutin-logo.svg",
                                "/images/hermes-orange.png",
                                "/images/versace-medusa-logo.png",
                                "/images/brunello_cucinelli-logo.png",
                            ].map((src, i) => (
                                <div className="mobile-brand-item" key={i}>
                                    <img src={src} alt="Brand" />
                                </div>
                            ))}
                        </div>
                    </div>*/}
                </div>
            </section>

            {/* Spotlight Categories Section */}
            <Stack className="category-section">
                <Stack className="container-fluid px-0">
                    <Box className="row g-0" id="categoriesContainer">
                        {categories.map((cat, index) => (
                            <div className="col-6 col-md-3" key={index}>
                                <Link to={cat.url} className="category-card">
                                    <img src={cat.image} alt={cat.name} className="category-img"/>
                                    <div className="category-overlay">
                                        <div className="category-title">{cat.name}</div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </Box>
                </Stack>
            </Stack>

            {/* Featured Products Section */}
            <section className="featured-products-section">
                <div className="featured-container">
                    {/* Tabs */}
                    <div className="featured-tabs">
                        <button className="featured-tab active" data-tab="new">
                            Yangi
                        </button>
                        <button className="featured-tab" data-tab="hot">
                            Mashhur
                        </button>
                        <button className="featured-tab" data-tab="sale">
                            Chegirmada
                        </button>
                    </div>

                    {/* New Products */}
                    <div className="featured-content active" id="new-products">
                        <div className="featured-carousel">
                            <button className="featured-nav featured-nav-prev">
                                <i className="fas fa-chevron-left"></i>
                            </button>
                            <div className="featured-products-track" id="new-products-grid">
                                {/* New products will be loaded here */}
                            </div>
                            <button className="featured-nav featured-nav-next">
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>

                    {/* Hot Products */}
                    <div className="featured-content" id="hot-products">
                        <div className="featured-carousel">
                            <button className="featured-nav featured-nav-prev">
                                <i className="fas fa-chevron-left"></i>
                            </button>
                            <div className="featured-products-track" id="hot-products-grid">
                                {/* Hot products will be loaded here */}
                            </div>
                            <button className="featured-nav featured-nav-next">
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>

                    {/* Sale Products */}
                    <div className="featured-content" id="sale-products">
                        <div className="featured-carousel">
                            <button className="featured-nav featured-nav-prev">
                                <i className="fas fa-chevron-left"></i>
                            </button>
                            <div className="featured-products-track" id="sale-products-grid">
                                {/* Sale products will be loaded here */}
                            </div>
                            <button className="featured-nav featured-nav-next">
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;