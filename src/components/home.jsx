import {categories, brands} from '../constants'
import './home.css';
import {Box, Container, Stack} from "@mui/material";
import {Link} from "react-router-dom";
import BrandShowcase from "./home/brand-showcase";

const Home = () => {

    return (
        <div>
            {/* 3D Hero Showcase Section */}
            {/*<BrandShowcase />*/}

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