import { useState, useEffect } from "react"
import { Container, Box, Grid, Typography, Chip } from "@mui/material"
import ProductService from "../../../service/product"

const Product = ({ selectedCategory }) => {
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(0)
    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
        if (selectedCategory) {
            fetchProductsByCategory()
        } else {
            fetchProducts()
        }
    }, [selectedCategory])

    const fetchProductsByCategory = async () => {
        try {
            const data = await ProductService.getProductsByCategoryId(selectedCategory)
            setProducts(data.content)
            setTotalPages(data.totalPages)
        } catch (error) {
            console.error("Error fetching products:", error)
        }
    }

    const fetchProducts = async () => {
        try {
            const data = await ProductService.getProducts()
            setProducts(data.content)
            setTotalPages(data.totalPages)
        } catch (error) {
            console.error("Error fetching products:", error)
        }
    }

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
        return new Intl.NumberFormat("uz-UZ").format(price) + " UZS"
    }

    const handleQuickView = (productId) => {
        console.log("Quick view for product:", productId)
    }

    return (
        <Container
            maxWidth="xl"
            sx={{
                py: { xs: 3, md: 5 },
            }}
        >
            {products.length > 0 ? (
                <Box>
                    <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
                        {products.map((product) => {
                            const statusConfig = getStatusConfig(product.status)
                            const hasDiscount = product.status === "SALE" && product.discount > 0
                            const discountedPrice = calculateDiscountedPrice(product.price, product.discount)
                            const mainImage = product.attachmentKeys?.[0] || ""

                            return (
                                <Grid item xs={6} sm={6} md={4} lg={3} key={product.id}>
                                    <Box
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
                                                <Chip
                                                    label={statusConfig.text}
                                                    sx={{
                                                        position: "absolute",
                                                        top: hasDiscount ? { xs: "36px", md: "42px" } : { xs: "10px", md: "12px" },
                                                        right: { xs: "10px", md: "12px" },
                                                        backgroundColor: statusConfig.color,
                                                        color: "white",
                                                        fontWeight: 800,
                                                        fontSize: { xs: "9px", md: "10px" },
                                                        height: { xs: "22px", md: "26px" },
                                                        px: { xs: 1, md: 1.5 },
                                                        zIndex: 3,
                                                        letterSpacing: "0.5px",
                                                        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                                                        "& .MuiChip-label": {
                                                            px: 0,
                                                        },
                                                    }}
                                                />
                                            )}

                                            <Box
                                                component="img"
                                                className="product-image"
                                                src={mainImage || "/placeholder.svg?height=500&width=375"}
                                                alt={product.name}
                                                sx={{
                                                    position: "absolute",
                                                    top: 0,
                                                    left: 0,
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                    transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                                                }}
                                            />

                                            <Box
                                                className="quick-view-overlay"
                                                onClick={() => handleQuickView(product.id)}
                                                sx={{
                                                    position: "absolute",
                                                    bottom: 0,
                                                    left: 0,
                                                    right: 0,
                                                    background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 100%)",
                                                    opacity: 0,
                                                    transition: "opacity 0.4s ease",
                                                    display: "flex",
                                                    alignItems: "flex-end",
                                                    justifyContent: "center",
                                                    pb: { xs: 2, md: 3 },
                                                    zIndex: 2,
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        backgroundColor: "white",
                                                        color: "#1a1a1a",
                                                        px: { xs: 2.5, md: 3.5 },
                                                        py: { xs: 1, md: 1.25 },
                                                        borderRadius: "50px",
                                                        fontWeight: 700,
                                                        fontSize: { xs: "11px", md: "13px" },
                                                        letterSpacing: "0.5px",
                                                        textTransform: "uppercase",
                                                        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                                                        transition: "all 0.3s ease",
                                                        "&:hover": {
                                                            backgroundColor: "#1a1a1a",
                                                            color: "white",
                                                            transform: "scale(1.05)",
                                                        },
                                                    }}
                                                >
                                                    Quick View
                                                </Box>
                                            </Box>
                                        </Box>

                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: { xs: 0.5, md: 0.75 },
                                                px: { xs: 0.5, md: 1 },
                                            }}
                                        >
                                            {/* Category */}
                                            {product.categoryName && (
                                                <Typography
                                                    sx={{
                                                        fontSize: { xs: "9px", md: "10px" },
                                                        color: "#999",
                                                        textTransform: "uppercase",
                                                        letterSpacing: "1px",
                                                        fontWeight: 600,
                                                    }}
                                                >
                                                    {product.categoryName}
                                                </Typography>
                                            )}

                                            {/* Product Name */}
                                            <Typography
                                                sx={{
                                                    fontSize: { xs: "13px", md: "15px" },
                                                    fontWeight: 600,
                                                    color: "#1a1a1a",
                                                    lineHeight: 1.3,
                                                    minHeight: { xs: "32px", md: "40px" },
                                                    display: "-webkit-box",
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: "vertical",
                                                    overflow: "hidden",
                                                    transition: "color 0.3s ease",
                                                    "&:hover": {
                                                        color: "#ff6b6b",
                                                    },
                                                }}
                                            >
                                                {product.name}
                                            </Typography>

                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: { xs: 1, md: 1.5 },
                                                    flexWrap: "wrap",
                                                    mt: { xs: 0.5, md: 1 },
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        fontSize: { xs: "16px", md: "20px" },
                                                        fontWeight: 800,
                                                        color: hasDiscount ? "#ff6b6b" : "#1a1a1a",
                                                        letterSpacing: "-0.5px",
                                                    }}
                                                >
                                                    {formatPrice(hasDiscount ? discountedPrice : product.price)}
                                                </Typography>

                                                {hasDiscount && (
                                                    <>
                                                        <Typography
                                                            sx={{
                                                                fontSize: { xs: "12px", md: "14px" },
                                                                color: "#aaa",
                                                                textDecoration: "line-through",
                                                                fontWeight: 500,
                                                            }}
                                                        >
                                                            {formatPrice(product.price)}
                                                        </Typography>
                                                        <Chip
                                                            label={`-${product.discount}%`}
                                                            size="small"
                                                            sx={{
                                                                backgroundColor: "#ff6b6b",
                                                                color: "white",
                                                                fontWeight: 800,
                                                                fontSize: { xs: "10px", md: "11px" },
                                                                height: { xs: "20px", md: "22px" },
                                                                "& .MuiChip-label": {
                                                                    px: { xs: 0.75, md: 1 },
                                                                },
                                                            }}
                                                        />
                                                    </>
                                                )}
                                            </Box>

                                            {product.productSizes && product.productSizes.length > 0 && (
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        gap: { xs: 0.5, md: 0.75 },
                                                        flexWrap: "wrap",
                                                        mt: { xs: 0.75, md: 1 },
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
                                            )}
                                        </Box>
                                    </Box>
                                </Grid>
                            )
                        })}
                    </Grid>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <Box
                            sx={{
                                mt: { xs: 4, md: 6 },
                                textAlign: "center",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: { xs: "14px", md: "16px" },
                                    color: "#666",
                                    fontWeight: 500,
                                }}
                            >
                                Sahifa: {page + 1} / {totalPages}
                            </Typography>
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
