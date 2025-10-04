import { Box, Button } from "@mui/material"
import {useState} from "react";

const CategoriesList = ({ categories, onCategorySelect, selectedCategory }) => {

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 2,
                alignItems: "center",
                py: 1,
                maxHeight: { xs: "120px", sm: "150px", md: "200px" },
                overflowY: "auto",
                overflowX: "hidden",
                "&::-webkit-scrollbar": {
                    width: "6px",
                },
                "&::-webkit-scrollbar-track": {
                    backgroundColor: "transparent",
                },
                "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "rgba(107, 15, 42, 0.3)",
                    borderRadius: "3px",
                    "&:hover": {
                        backgroundColor: "rgba(107, 15, 42, 0.5)",
                    },
                },
            }}
        >
            {categories.map((category) => (
                <Button
                    variant="text"
                    key={category.id}
                    disableRipple
                    onClick={() => onCategorySelect(category.id)}
                    sx={{
                        minWidth: 140,
                        flex: "0 0 auto",
                        height: "28px",
                        px: 0,
                        backgroundColor: "transparent",
                        color:
                            selectedCategory === category.id
                                ? "black"
                                : "#0033aa",
                        fontFamily: "Noto Sans, sans-serif",
                        fontSize: "16px",
                        textTransform: "none",
                        whiteSpace: "nowrap",
                        "&:hover": {
                            backgroundColor: "transparent",
                            color: "black",
                        },
                        "&::after": {
                            content: '""',
                            position: "absolute",
                            left: 0,
                            bottom: 0,
                            height: "2px",
                            width: "100%",
                            backgroundColor: "#0033aa",
                            transform:
                                selectedCategory === category.id
                                    ? "scaleX(1)"
                                    : "scaleX(0)",
                            transformOrigin: "left",
                            transition: "transform 0.3s ease",
                        },
                        "&:hover::after": {
                            transform: "scaleX(1)",
                        },
                    }}
                >
                    {category.name}
                </Button>
            ))}
        </Box>
    )
}

export default CategoriesList
