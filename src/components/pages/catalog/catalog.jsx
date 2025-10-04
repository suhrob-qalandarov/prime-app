import {Stack, Container, Button, Box} from "@mui/material";
import {Link, useSearchParams} from "react-router-dom";
import {spotlights} from "../../../constants";
import CategoryService from "../../../service/catalog";
import CategoriesList from "./categories-list";
import {useEffect, useState} from "react";
import SpotlightList from "./spotlight-list";
import Product from "./product";
import CatalogPageHeader from "./catalog-page-header";

const Catalog = () => {
    const [categoriesData, setCategoriesData] = useState([])
    const [searchParams] = useSearchParams()
    const [isFetching, setFetching] = useState(false)

    const [selectedCategory, setSelectedCategory] = useState(null);

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

    const handleCategorySelect = (categoryId) => {
        setSelectedCategory(categoryId);
        console.log(categoryId)
    };

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
                    <CatalogPageHeader spotlight={spotlight}/>
                    <SpotlightList spotlights={spotlights} />
                    <Container>
                        <CategoriesList
                            categories={categoriesData}
                            onCategorySelect={handleCategorySelect}
                            selectedCategory={selectedCategory}
                        />
                        {selectedCategory && (
                            <Product selectedCategory={selectedCategory} />
                        )}
                    </Container>
                </Container>
            </Stack>
        </Stack>
    )
}

export default Catalog
