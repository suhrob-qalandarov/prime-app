
import { Box, Stack, Container, Card, CardContent, Typography, Button } from "@mui/material"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import UserOrder from "./user-order";

const Profile = () => {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const userData = localStorage.getItem("prime-user")
        if (userData) {
            setUser(JSON.parse(userData))
        }
    }, [])

    if (!user) {
        navigate("/login")
        return (
            <Stack>
                <Stack className="page-header">
                    <Container>
                        <div className="page-header-content">
                            <h1 className="page-title">Profil</h1>
                            <nav className="breadcrumb-nav">
                                <a href="/" className="breadcrumb-link">
                                    Asosiy
                                </a>
                                <span className="breadcrumb-separator">/</span>
                                <span className="breadcrumb-current">Profil</span>
                            </nav>
                        </div>
                    </Container>
                </Stack>
                <Stack>
                    <Box className="container-custom">
                        <Typography>Ma'lumotlar yuklanmoqda...</Typography>
                    </Box>
                </Stack>
            </Stack>
        )
    }

    return (
        <Stack>
            <Stack className="page-header">
                <Container>
                    <div className="page-header-content">
                        <h1 className="page-title">Profil</h1>
                        <nav className="breadcrumb-nav">
                            <a href="/" className="breadcrumb-link">
                                Asosiy
                            </a>
                            <span className="breadcrumb-separator">/</span>
                            <span className="breadcrumb-current">Profil</span>
                        </nav>
                    </div>
                </Container>
            </Stack>

            <Stack sx={{ padding: "40px 20px", minHeight: "60vh" }}>
                <Box sx={{ display: "flex", gap: "0px", justifyContent: "center", flexWrap: "wrap" }}>
                    <Container maxWidth="md">
                        <Card
                            sx={{
                                maxWidth: 400,
                                margin: "0 auto",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                                borderRadius: "15px",
                                backgroundColor: "#f0f0f0",
                            }}
                        >
                            <CardContent sx={{ padding: "30px" }}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginBottom: "30px",
                                        paddingBottom: "20px",
                                        borderBottom: "1px solid #eee",
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: "bold",
                                            color: "var(--burgundy-dark)",
                                        }}
                                    >
                                        Shaxsiy ma'lumotlar
                                    </Typography>
                                </Box>

                                {/* User information */}
                                <Box sx={{ textAlign: "left" }}>
                                    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                        <Box>
                                            <Typography variant="body1"
                                                        sx={{
                                                            fontWeight: "800",
                                                            fontSize: "18px",
                                                            marginBottom: "-10px",
                                                        }}>
                                                {user.firstName || "NaN"}
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="body3"
                                                        sx={{
                                                            fontSize: "15px",
                                                            fontWeight: "500"
                                                        }}>
                                                {user.phone || ""}
                                            </Typography>
                                        </Box>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                width: "30%",
                                                fontWeight: "300",
                                                marginTop: "10px",
                                                backgroundColor: "var(--burgundy-color)",
                                                "&:hover": {
                                                    backgroundColor: "var(--burgundy-dark)",
                                                },
                                            }}
                                        >
                                            Yangilash
                                        </Button>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Container>
                    <UserOrder user={user} />
                </Box>
            </Stack>
        </Stack>
    )
}

export default Profile
