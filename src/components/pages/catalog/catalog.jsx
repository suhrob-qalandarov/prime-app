import {Stack, Container, Button, Box} from "@mui/material";
import {Link, useSearchParams} from "react-router-dom";
import {spotlights} from "../../../constants";
import CategoryService from "../../../service/catalog";
import CategoriesList from "./categories-list";
import {useEffect, useState} from "react";
import SpotlightList from "./spotlight-list";

const Catalog = () => {
    const [categoriesData, setCategoriesData] = useState([])
    const [searchParams] = useSearchParams()
    const [isFetching, setFetching] = useState(false)

    const param = [...searchParams.keys()][0]
    const spotlight = spotlights.find((cat) => cat.url === param)

    useEffect(() => {
        localStorage.getItem("prime-categories")
        fetchCategories().then((r) => setFetching(true))
    }, [isFetching, setFetching])

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
                    minHeight: "200px",
                    paddingBottom: "8px",
                }}
            >
                <Container>
                    <Stack
                        sx={{
                            marginTop: "16px",
                            textAlign: "center",
                        }}
                    >
                        <Box
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
                            {spotlight ? spotlight.name : "Katalog"}
                        </Box>
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
                            <span className="breadcrumb-current">{spotlight ? spotlight.name : "Katalog"}</span>
                        </Box>
                    </Stack>
                    <SpotlightList spotlights={spotlights} />
                    <Container>
                        <CategoriesList categories={categoriesData} />
                    </Container>
                </Container>
            </Stack>
        </Stack>
    )
}

export default Catalog
