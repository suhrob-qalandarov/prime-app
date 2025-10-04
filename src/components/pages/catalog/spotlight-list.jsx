import { Container, Button, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const SpotlightList = ({ spotlights, spotlight }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Container
            style={{
                paddingBottom: "10px",
                borderBottom: isMobile ? "none" : "1px solid #6b0f2a",
            }}
        >
            {isMobile ? (
                // Telefon va planshet uchun Select box
                <FormControl fullWidth sx={{ marginBottom: "10px" }}>
                    <InputLabel id="spotlight-select-label">{spotlight ? spotlight.name : "Kategoriyani tanlang"}</InputLabel>
                    <Select
                        labelId="spotlight-select-label"
                        label="Kategoriyani tanlang"
                        onChange={(e) => {
                            const selectedSpot = spotlights.find((spot) => spot.name === e.target.value);
                            if (selectedSpot) {
                                window.location.href = `/catalog?${selectedSpot.url}`;
                            }
                        }}
                        sx={{
                            backgroundColor: "transparent",
                            color: "var(--burgundy-color)",
                            fontWeight: "bold",
                            fontFamily: "Noto Sans, sans-serif",
                            fontSize: "18px",
                            "& .MuiSelect-select": {
                                padding: "10px",
                            },
                        }}
                     variant={"filled"}>
                        {spotlights.map((spot, index) => (
                            <MenuItem key={index} value={spot.name}>
                                {spot.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            ) : (
                // Kompyuter uchun Button ro‘yxati
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
            )}
        </Container>
    )
}

export default SpotlightList
