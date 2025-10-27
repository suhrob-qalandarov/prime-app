import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Box, Typography, Chip, Pagination } from "@mui/material"
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"
import ProductService from "../../../service/product"
import urls from "../../../constants/urls"
import QuickViewModal from "./modal/quick-view"

const Product = ({ selectedCategory }) => {
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [hoveredProductId, setHoveredProductId] = useState(null)
    const [quickViewOpen, setQuickViewOpen] = useState(false)
    const [selectedProductId, setSelectedProductId] = useState(null)
    const itemsPerPage = 20

    useEffect(() => {
        if (selectedCategory) {
            fetchProductsByCategory()
        }
        if (!selectedCategory) {
            fetchProducts()
        }
    }, [selectedCategory])

    const fetchProductsByCategory = async () => {
        try {
            const data = await ProductService.getProductsByCategoryId(selectedCategory, 12)
            setProducts(data.content)
            setTotalPages(data.totalPages)
            setPage(1)
        } catch (error) {
            console.error("Error fetching products:", error)
        }
    }

    const fetchProducts = async () => {
        try {
            const data = await ProductService.getProducts(20)
            setProducts(data.content)
            setTotalPages(data.totalPages)
            setPage(1)
        } catch (error) {
            console.error("Error fetching products:", error)
        }
    }

    const startIndex = (page - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const paginatedProducts = products.slice(startIndex, endIndex)
    const calculatedTotalPages = Math.ceil(products.length / itemsPerPage)

    const getStatusConfig = (status) => {
        const configs = {
            HOT: { text: "HOT", color: "#ff4444" },
            NEW: { text: "NEW", color: "#4CAF50" },
            SALE: { text: "SALE", color: "#ff6b6b" },
        }
        return configs[status] || null
    }

    const calculateDiscountedPrice = (price, discount) => {
        if (!discount || discount === 0) return price
        return Math.round(price * (1 - discount / 100))
    }

    const formatPrice = (price) => {
        return new Intl.NumberFormat("uz-UZ").format(price) + " So'm"
    }

    const handleQuickView = (productId) => {
        setSelectedProductId(productId)
        setQuickViewOpen(true)
    }

    const handleProductClick = (productId) => {
        navigate(`/product?id=${productId}`)
    }

    const handlePageChange = (event, value) => {
        setPage(value)
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <Container
            maxWidth="xl"
            sx={{
                py: { xs: 3, md: 5 },
                "@keyframes slideUpQuickView": {
                    "0%": {
                        transform: "translateY(100%)",
                        opacity: 0,
                    },
                    "100%": {
                        transform: "translateY(0)",
                        opacity: 1,
                    },
                },
            }}
        >
            <QuickViewModal
                isOpen={quickViewOpen}
                onClose={() => setQuickViewOpen(false)}
                productId={selectedProductId}
                products={products}
            />

            {products.length > 0 ? (
                <Box>
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "repeat(2, 1fr)",
                                sm: "repeat(3, 1fr)",
                                md: "repeat(4, 1fr)",
                            },
                            gap: { xs: 2, sm: 2.5, md: 3 },
                        }}
                    >
                        {paginatedProducts.map((product) => {
                            const statusConfig = getStatusConfig(product.status)
                            const hasDiscount = product.status === "SALE" && product.discount > 0
                            const discountedPrice = calculateDiscountedPrice(product.price, product.discount)
                            const mainImage = product.attachmentKeys?.[0] || ""
                            const isHovered = hoveredProductId === product.id

                            return (
                                <Box
                                    key={product.id}
                                    onMouseEnter={() => setHoveredProductId(product.id)}
                                    onMouseLeave={() => setHoveredProductId(null)}
                                    sx={{
                                        position: "relative",
                                        cursor: "pointer",
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                        "&:hover": {
                                            "& .product-image": {
                                                transform: "scale(1.08)",
                                            },
                                            "& .quick-view-overlay": {
                                                opacity: 1,
                                                transform: "translateY(0)",
                                            },
                                        },
                                    }}
                                >
                                    {/* Image Container */}
                                    <Box
                                        sx={{
                                            position: "relative",
                                            width: "100%",
                                            paddingTop: "133.33%",
                                            overflow: "hidden",
                                            borderRadius: { xs: "12px", md: "16px" },
                                            backgroundColor: "#f5f5f5",
                                            mb: { xs: 1.5, md: 2 },
                                            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                                        }}
                                    >
                                        {hasDiscount && (
                                            <Box
                                                sx={{
                                                    position: "absolute",
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    backgroundColor: "#ff6b6b",
                                                    color: "white",
                                                    py: { xs: 0.75, md: 1 },
                                                    overflow: "hidden",
                                                    zIndex: 3,
                                                    boxShadow: "0 2px 8px rgba(255,107,107,0.3)",
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        whiteSpace: "nowrap",
                                                        animation: "scroll-banner 20s linear infinite",
                                                        "@keyframes scroll-banner": {
                                                            "0%": { transform: "translateX(0)" },
                                                            "100%": { transform: "translateX(-50%)" },
                                                        },
                                                    }}
                                                >
                                                    <Typography
                                                        sx={{
                                                            fontSize: { xs: "10px", md: "11px" },
                                                            fontWeight: 800,
                                                            letterSpacing: "1.5px",
                                                            textTransform: "uppercase",
                                                        }}
                                                    >
                                                        🔥 QAYNOQ CHEGIRMA {product.discount}% 🔥 &nbsp;&nbsp;&nbsp;&nbsp; 🔥 QAYNOQ CHEGIRMA{" "}
                                                        {product.discount}% 🔥 &nbsp;&nbsp;&nbsp;&nbsp;
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        )}

                                        {statusConfig && (
                                            <Box
                                                sx={{
                                                    position: "absolute",
                                                    top: hasDiscount ? { xs: "36px", md: "42px" } : { xs: "10px", md: "12px" },
                                                    right: { xs: "10px", md: "12px" },
                                                    zIndex: 4,
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: { xs: 0.75, md: 1 },
                                                    alignItems: "flex-end",
                                                }}
                                            >
                                                {/* Status Chip */}
                                                {/*<Chip
                                                    label={statusConfig.text}
                                                    sx={{
                                                        backgroundColor: statusConfig.color,
                                                        color: "white",
                                                        fontWeight: 800,
                                                        fontSize: { xs: "9px", md: "10px" },
                                                        height: { xs: "22px", md: "26px" },
                                                        px: { xs: 1, md: 1.5 },
                                                        letterSpacing: "0.5px",
                                                        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                                                        "& .MuiChip-label": {
                                                            px: 0,
                                                        },
                                                    }}
                                                />*/}

                                                <Box
                                                    sx={{
                                                        display: { xs: "flex", md: "none" },
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        width: { xs: "32px", md: "40px" },
                                                        height: { xs: "32px", md: "40px" },
                                                        backgroundColor: "#f5f5dc",
                                                        borderRadius: "6px",
                                                        cursor: "pointer",
                                                        transition: "all 0.3s ease",
                                                    }}
                                                    onClick={() => handleQuickView(product.id)}
                                                >
                                                    <VisibilityOutlinedIcon
                                                        sx={{
                                                            fontSize: { xs: "18px", md: "20px" },
                                                            color: "#000",
                                                            transition: "color 0.3s ease",
                                                        }}
                                                    />
                                                </Box>
                                            </Box>
                                        )}

                                        <Box
                                            component="img"
                                            className="product-image"
                                            src={`${urls.apiBaseUrl}/v1/attachment/${mainImage}` || "/placeholder.svg?height=500&width=375"}
                                            alt={product.name}
                                            sx={{
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                                            }}
                                        />

                                        <Box
                                            className="quick-view-overlay"
                                            onClick={() => handleQuickView(product.id)}
                                            sx={{
                                                display: { xs: "none", md: "flex" },
                                                position: "absolute",
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                                background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 100%)",
                                                opacity: 0,
                                                transform: "translateY(100%)",
                                                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                                                "@keyframes slideUpQuickView": {
                                                    "0%": {
                                                        transform: "translateY(100%)",
                                                        opacity: 0,
                                                    },
                                                    "100%": {
                                                        transform: "translateY(0)",
                                                        opacity: 1,
                                                    },
                                                },
                                                alignItems: "flex-end",
                                                justifyContent: "center",
                                                pb: { md: 4 },
                                                zIndex: 2,
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    backgroundColor: "var(--light-color)",
                                                    color: "#1a1a1a",
                                                    px: { xs: 2.5, md: 14.5 },
                                                    py: { xs: 1, md: 1.25 },
                                                    borderRadius: "50px",
                                                    fontWeight: 700,
                                                    fontSize: { xs: "11px", md: "13px" },
                                                    letterSpacing: "1px",
                                                    textTransform: "uppercase",
                                                    fontFamily: "Noto Sans",
                                                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                                                    transition: "all 0.3s ease",
                                                }}
                                            >
                                                Quick View
                                            </Box>
                                        </Box>
                                    </Box>

                                    <Box
                                        onClick={() => handleProductClick(product.id)}
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: { xs: 0.5, md: 0.75 },
                                            px: { xs: 0.5, md: 1 },
                                            cursor: "pointer",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "flex-start",
                                                gap: { xs: 1, md: 1.5 },
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: { xs: "12px", md: "16px" },
                                                    fontFamily: "Noto Sans",
                                                    fontWeight: 600,
                                                    color: "#1a1a1a",
                                                    lineHeight: 1.3,
                                                    flex: 1,
                                                    display: "-webkit-box",
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: "vertical",
                                                    overflow: "hidden",
                                                    transition: "color 0.3s ease",
                                                }}
                                            >
                                                {product.name}
                                            </Typography>

                                            {product.brand && (
                                                <Typography
                                                    sx={{
                                                        fontSize: { xs: "9px", md: "11px" },
                                                        fontFamily: "Noto Sans",
                                                        color: "#999",
                                                        textTransform: "uppercase",
                                                        letterSpacing: "1px",
                                                        fontWeight: 600,
                                                        whiteSpace: "nowrap",
                                                        textAlign: "right",
                                                    }}
                                                >
                                                    {product.brand}
                                                </Typography>
                                            )}
                                        </Box>

                                        {/*{product.productSizes && product.productSizes.length > 0 && (
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    gap: { xs: 0.5, md: 0.75 },
                                                    flexWrap: "wrap",
                                                    maxHeight: { xs: "100px", md: isHovered ? "100px" : "0px" },
                                                    overflow: "hidden",
                                                    opacity: { xs: 1, md: isHovered ? 1 : 0 },
                                                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                                    my: { xs: 0.75, md: isHovered ? { xs: 0.75, md: 1 } : 0 },
                                                }}
                                            >
                                                {product.productSizes
                                                    .filter((size) => size.amount > 0)
                                                    .slice(0, 4)
                                                    .map((size, index) => (
                                                        <Chip
                                                            key={index}
                                                            label={size.size}
                                                            size="small"
                                                            sx={{
                                                                fontSize: { xs: "9px", md: "10px" },
                                                                height: { xs: "20px", md: "22px" },
                                                                borderRadius: "6px",
                                                                border: "1px solid #e0e0e0",
                                                                backgroundColor: "white",
                                                                color: "#666",
                                                                fontWeight: 600,
                                                                transition: "all 0.3s ease",
                                                                "&:hover": {
                                                                    borderColor: "#1a1a1a",
                                                                    backgroundColor: "#1a1a1a",
                                                                    color: "white",
                                                                },
                                                                "& .MuiChip-label": {
                                                                    px: { xs: 0.75, md: 1 },
                                                                },
                                                            }}
                                                        />
                                                    ))}
                                            </Box>
                                        )}*/}

                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: { xs: 1, md: 1.5 },
                                                flexWrap: "wrap",
                                                mt: 0,
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: { xs: "13px", md: "16px" },
                                                    fontWeight: 600,
                                                    fontFamily: "Noto Sans",
                                                    color: "#1a1a1a",
                                                    letterSpacing: "0.5px",
                                                }}
                                            >
                                                {formatPrice(hasDiscount ? discountedPrice : product.price)}
                                            </Typography>

                                            {hasDiscount && (
                                                <>
                                                    <Typography
                                                        sx={{
                                                            fontSize: { xs: "13px", md: "14px" },
                                                            color: "#636262",
                                                            textDecoration: "line-through",
                                                            textDecorationColor: "black",
                                                            fontWeight: 500,
                                                            fontFamily: "Noto Sans",
                                                        }}
                                                    >
                                                        {formatPrice(product.price)}
                                                    </Typography>
                                                    <Chip
                                                        label={`-${product.discount}%`}
                                                        sx={{
                                                            backgroundColor: "rgba(189,236,118,0.87)",
                                                            color: "black",
                                                            fontWeight: 600,
                                                            fontSize: "14px",
                                                            height: "25px",
                                                            "& .MuiChip-label": {
                                                                px: 1.5,
                                                            },
                                                        }}
                                                    />
                                                </>
                                            )}
                                        </Box>
                                    </Box>
                                </Box>
                            )
                        })}
                    </Box>

                    {calculatedTotalPages > 1 && (
                        <Box
                            sx={{
                                mt: { xs: 4, md: 6 },
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Pagination
                                count={calculatedTotalPages}
                                page={page}
                                onChange={handlePageChange}
                                color="standard"
                                size="large"
                                sx={{
                                    "& .MuiPaginationItem-root": {
                                        fontWeight: 600,
                                        fontSize: "14px",
                                        borderRadius: "8px",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            backgroundColor: "#f0f0f0",
                                        },
                                    },
                                    "& .MuiPaginationItem-page.Mui-selected": {
                                        backgroundColor: "#6b0f2a",
                                        color: "white",
                                        fontWeight: 700,
                                        "&:hover": {
                                            backgroundColor: "#5a0a22",
                                        },
                                    },
                                    "& .MuiPaginationItem-ellipsis": {
                                        color: "#999",
                                    },
                                }}
                            />
                        </Box>
                    )}
                </Box>
            ) : (
                <Box
                    sx={{
                        textAlign: "center",
                        py: { xs: 8, md: 12 },
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: "60px", md: "80px" },
                            mb: { xs: 2, md: 3 },
                        }}
                    >
                        📦
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: { xs: "20px", md: "24px" },
                            color: "#1a1a1a",
                            fontWeight: 700,
                            mb: { xs: 1, md: 1.5 },
                        }}
                    >
                        Mahsulotlar topilmadi
                    </Typography>
                    <Typography
                        sx={{
                            color: "#666",
                            fontSize: { xs: "14px", md: "16px" },
                        }}
                    >
                        Bu kategoriyada hozircha mahsulotlar mavjud emas.
                    </Typography>
                </Box>
            )}
        </Container>
    )
}

export default Product
