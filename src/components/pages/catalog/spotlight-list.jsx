import { Container, Button } from "@mui/material"

const SpotlightList = ({ spotlights }) => {
    return (
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
    )
}

export default SpotlightList
