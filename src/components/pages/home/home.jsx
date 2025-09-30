import {spotlights} from '../../../constants'
import './home.css';
import {Box, Stack} from "@mui/material";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Stack className="category-section">
                <Stack className="container-fluid px-0">
                    <Box className="row g-0" id="categoriesContainer">
                        {spotlights.map((cat, index) => (
                            <div className="col-6 col-md-3" key={index}>
                                <Link to={'/catalog?' + cat.url} className="category-card">
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
        </div>
    );
};

export default Home;