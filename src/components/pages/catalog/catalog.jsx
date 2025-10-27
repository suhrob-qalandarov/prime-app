import { Stack, Container, Box, useMediaQuery } from "@mui/material"
import { useSearchParams } from "react-router-dom"
import { spotlights } from "../../../constants"
import CategoryService from "../../../service/catalog"
import CategoriesList from "./categories-list"
import { useEffect, useState } from "react"
import SpotlightList from "./spotlight-list"
import Product from "../product/product"
import CatalogPageHeader from "./catalog-page-header"
import { useTheme } from "@mui/material/styles"

const Catalog = () => {
    const [categoriesData, setCategoriesData] = useState([])
    const [searchParams] = useSearchParams()
    const [isFetching, setFetching] = useState(false)

    const [selectedCategory, setSelectedCategory] = useState(null)

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

    const param = [...searchParams.keys()][0]
    const [selectedSpotlight, setSelectedSpotlight] = useState(spotlights.find((cat) => cat.url === param) || null)

    useEffect(() => {
        fetchCategories().then((r) => setFetching(false))
    }, [selectedSpotlight])

    const fetchCategories = async () => {
        try {
            let data
            if (selectedSpotlight) {
                data = await CategoryService.getCategoriesBySpotlightName(selectedSpotlight.name)
            } else {
                data = await CategoryService.getCategories()
            }
            setCategoriesData(data)
        } catch (error) {
            console.error("Error fetching categories:", error)
        }
    }

    const handleCategorySelect = (categoryId) => {
        setSelectedCategory(categoryId)
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
                    <CatalogPageHeader spotlight={selectedSpotlight} />
                    {isMobile ? (
                        <Box
                            sx={{
                                display: "flex",
                                gap: 2,
                                marginBottom: "16px",
                                paddingBottom: "10px",
                            }}
                        >
                            <Box sx={{ flex: 1 }}>
                                <SpotlightList spotlights={spotlights} spotlight={selectedSpotlight} isMobile={isMobile} />
                            </Box>
                            <Box sx={{ flex: 1 }}>
                                <CategoriesList
                                    categories={categoriesData}
                                    onCategorySelect={handleCategorySelect}
                                    selectedCategory={selectedCategory}
                                    isMobile={isMobile}
                                />
                            </Box>
                        </Box>
                    ) : (
                        <>
                            <SpotlightList spotlights={spotlights} spotlight={selectedSpotlight} isMobile={isMobile} />
                            <Container>
                                <CategoriesList
                                    categories={categoriesData}
                                    onCategorySelect={handleCategorySelect}
                                    selectedCategory={selectedCategory}
                                    isMobile={isMobile}
                                />
                            </Container>
                        </>
                    )}
                </Container>
            </Stack>
            <Product selectedCategory={selectedCategory} />
        </Stack>
    )
}

export default Catalog
