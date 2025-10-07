import { useState, useEffect } from "react";
import { Container, Box, Typography } from "@mui/material";
import ProductService from "../../../service/product";

const Product = ({ selectedCategory }) => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    // Tanlangan kategoriyaga qarab mahsulotlarni olish
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // ProductService orqali serverdan mahsulotlarni olish
                const data = await ProductService.getProductsByCategoryId(selectedCategory);
                setProducts(data.content); // Mahsulotlar ro‘yxatini yangilash
                setTotalPages(data.totalPages); // Jami sahifalar sonini yangilash
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        if (selectedCategory) {
            fetchProducts();
        }
    }, [selectedCategory]); // selectedCategory o‘zgarganda qayta yuklash

    return (
        <Container sx={{ marginTop: "20px" }}>
            {products.length > 0 ? (
                <Box>
                    {products.map((product) => (
                        <Box key={product.id} sx={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
                            <Typography>{product.name}</Typography>
                            <Typography>{product.price} UZS</Typography>
                        </Box>
                    ))}
                    {/* Sahifalash logikasi */}
                    <Box sx={{ marginTop: "20px" }}>
                        <Typography>Sahifa: {page + 1} / {totalPages}</Typography>
                    </Box>
                </Box>
            ) : (
                <Typography>Mahsulotlar topilmadi</Typography>
            )}
        </Container>
    );
};

export default Product;