import {Stack, Container, Button, Box} from "@mui/material";
import {Link, useSearchParams} from "react-router-dom";
import {spotlights} from "../../constants";
import CategoryService from "../../service/catalog";
import {useEffect, useState} from "react";

const Catalog = () => {
    const [categoriesData, setCategoriesData] = useState([])
    const [searchParams] = useSearchParams()
    const [isFetching, setFetching] = useState(false)

    const param = [...searchParams.keys()][0]
    const spotlight = spotlights.find(cat => cat.url === param)

    useEffect(() => {
        fetchCategories().then(r => setFetching(true))
    },[isFetching, setFetching])

    const fetchCategories = async () => {
        try {
            let data
            if (spotlight) {
                data = await CategoryService.getCategoriesBySpotlightName(spotlight.name)
            } else {
                data = await CategoryService.getCategories()
            }
            setCategoriesData(data)
        } catch (error) {
            console.error("Error fetching categories:", error)
        }
    }

    return (
        <Stack>
            <Stack
                sx={{
                    backgroundColor: "#f0f0f0",
                    marginTop: "70px",
                    width: "100%",
                    height: "250px",
                }}
            >
                <Container>
                    <Stack sx={{
                        marginTop: "16px",
                        textAlign: "center",
                    }}>
                        {/*<Box
                            sx={{
                                fontFamily: "Noto Sans, sans-serif",
                                fontSize: "2.5rem",
                                fontWeight: "700",
                                color: "#6b0f2a",
                                marginBottom: "0px",
                                textTransform: "uppercase",
                                letterSpacing: "1px",
                            }}
                        >
                            Katalog
                        </Box>*/}
                        <Box
                            sx={{
                                fontFamily: "Noto Sans, sans-serif",
                                fontSize: "1.1rem",
                                fontWeight: "300",
                                color: "#6b0f2a",
                                marginBottom: "8px",
                                letterSpacing: "1px",
                                marginTop: "10px",
                            }}
                        >
                            <Link to="/" className="breadcrumb-link">
                                Asosiy
                            </Link>
                            <span className="breadcrumb-separator">/</span>
                            <span className="breadcrumb-current">
                                {spotlight ? spotlight.name : "Katalog"}
                            </span>
                        </Box>
                    </Stack>
                    <Container
                        style={{
                            paddingBottom: "10px",
                            borderBottom: "1px solid #6b0f2a",
                        }}
                    >
                        <div className="row g-4">
                            {spotlights.map((spot, index) => (
                                <div className="col-6 col-md-3" key={index}>
                                    <Button variant="text"
                                            href={`/catalog?${spot.url}`}
                                            sx={{
                                                width: "100%",
                                                height: "100%",
                                                padding: "10px",
                                                backgroundColor: "transparent",
                                                color: "var(--burgundy-color)",
                                                fontWeight: "bold",
                                                fontFamily: "Noto Sans, sans-serif",
                                                fontSize: "18px",
                                                textTransform: "none",
                                                "&:hover": {}
                                            }}
                                    >
                                        {spot.name}
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </Container>
                    <Container>
                        <Box
                            spacing={2}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                gap: 2,
                                alignItems: 'center',
                                py: 1,
                            }}
                        >
                            {categoriesData.map((category, index) => (
                                <Button
                                    variant="text"
                                    key={category.id}
                                    sx={{
                                        minWidth: 140,
                                        flex: '0 0 auto',
                                        height: '48px',
                                        px: 0,
                                        backgroundColor: 'transparent',
                                        color: 'black',
                                        fontFamily: 'Noto Sans, sans-serif',
                                        fontSize: '16px',
                                        textTransform: 'none',
                                        whiteSpace: 'nowrap',
                                        //'&:hover': { backgroundColor: 'rgba(107,15,42,0.06)' }
                                    }}
                                >
                                    {category.name}
                                </Button>
                            ))}
                        </Box>
                    </Container>
                </Container>
            </Stack>
        </Stack>
    );
};

export default Catalog;
