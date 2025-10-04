import { Container, Button, Select, MenuItem, FormControl } from "@mui/material"

const SpotlightList = ({ spotlights, spotlight, isMobile }) => {
    return (
        <>
            {isMobile ? (
                <FormControl fullWidth>
                    <Select
                        displayEmpty
                        value={spotlight ? spotlight.name : ""}
                        onChange={(e) => {
                            const selectedSpot = spotlights.find((spot) => spot.name === e.target.value)
                            if (selectedSpot) {
                                window.location.href = `/catalog?${selectedSpot.url}`
                            }
                        }}
                        sx={{
                            backgroundColor: "var(--light-color)",
                            color: "#0033aa",
                            fontWeight: "bold",
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
                    >
                        <MenuItem value="" disabled>
                            KOLLEKSIYALAR
                        </MenuItem>
                        {spotlights.map((spot, index) => (
                            <MenuItem key={index} value={spot.name} sx={{textTransform: "uppercase"}}>
                                {spot.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            ) : (
                // Kompyuter uchun Button ro'yxati
                <Container
                    style={{
                        paddingBottom: "10px",
                        borderBottom: "1px solid #6b0f2a",
                    }}
                >
                    <div className="row g-4">
                        {spotlights.map((spot, index) => (
                            <div className="col-6 col-md-3" key={index}>
                                <Button
                                    variant="text"
                                    disableRipple
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
                                        "&:hover": {},
                                    }}
                                >
                                    {spot.name}
                                </Button>
                            </div>
                        ))}
                    </div>
                </Container>
            )}
        </>
    )
}

export default SpotlightList
