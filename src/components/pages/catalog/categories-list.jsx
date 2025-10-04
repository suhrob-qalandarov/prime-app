import { Box, Button, Select, MenuItem, FormControl } from "@mui/material"

const CategoriesList = ({ categories, onCategorySelect, selectedCategory, isMobile }) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: isMobile ? "column" : "row",
                flexWrap: isMobile ? "nowrap" : "wrap",
                gap: 2,
                alignItems: "center",
                py: isMobile ? 0 : 1,
                maxHeight: { xs: "auto", sm: "auto", md: "400px" },
                overflowY: isMobile ? "hidden" : "auto",
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
            {isMobile ? (
                <FormControl fullWidth>
                    <Select
                        displayEmpty
                        value={selectedCategory || ""}
                        onChange={(e) => onCategorySelect(e.target.value)}
                        sx={{
                            backgroundColor: "var(--light-color)",
                            color: "#0033aa",
                            fontFamily: "Noto Sans, sans-serif",
                            textTransform: "uppercase",
                            fontSize: "16px",
                            borderRadius: "8px",
                            "& .MuiSelect-select": {
                                padding: "12px 14px",
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                                border: "none",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                                border: "none",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                border: "none",
                            },
                        }}
                        variant={"filled"}>
                        <MenuItem value="" disabled>
                            KATEGORIYALAR
                        </MenuItem>
                        {categories.map((category) => (
                            <MenuItem key={category.id} value={category.id} sx={{textTransform: "uppercase",}}>
                                {category.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            ) : (
                // Kompyuter uchun Button ro‘yxati
                categories.map((category) => (
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
                            color: selectedCategory === category.id ? "black" : "#0033aa",
                            fontFamily: "Noto Sans, sans-serif",
                            fontSize: "16px",
                            textTransform: "uppercase",
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
                                transform: selectedCategory === category.id ? "scaleX(1)" : "scaleX(0)",
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
                ))
            )}
        </Box>
    );
};

export default CategoriesList