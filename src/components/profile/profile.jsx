import { Box, Stack, Container, Card, CardContent, Typography, Button } from "@mui/material"
import { useState, useEffect } from "react"

const Profile = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const userData = localStorage.getItem("user")
        if (userData) {
            setUser(JSON.parse(userData))
        }
    }, [])

    if (!user) {
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
                <Container maxWidth="md">
                    <Card
                        sx={{
                            maxWidth: 600,
                            margin: "0 auto",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                            borderRadius: "15px",
                        }}
                    >
                        <CardContent sx={{ padding: "30px" }}>
                            {/* Cashback balance and orders button */}
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
                                    variant="h6"
                                    sx={{
                                        fontWeight: "bold",
                                        color: "#333",
                                    }}
                                >
                                    Keshbek balans: 0 So'm
                                </Typography>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "var(--burgundy-color)",
                                        "&:hover": {
                                            backgroundColor: "var(--burgundy-dark)",
                                        },
                                    }}
                                >
                                    Buyurtmalarim
                                </Button>
                            </Box>

                            {/* User information */}
                            <Box sx={{ textAlign: "left" }}>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        marginBottom: "20px",
                                        fontWeight: "bold",
                                        color: "var(--burgundy-dark)",
                                    }}
                                >
                                    Foydalanuvchi ma'lumotlari
                                </Typography>

                                <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                                    <Box>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: "#666",
                                                fontWeight: "500",
                                                marginBottom: "5px",
                                            }}
                                        >
                                            Ism:
                                        </Typography>
                                        <Typography variant="body1" sx={{ fontWeight: "600" }}>
                                            {user.firstName || "Kiritilmagan"}
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: "#666",
                                                fontWeight: "500",
                                                marginBottom: "5px",
                                            }}
                                        >
                                            Familiya:
                                        </Typography>
                                        <Typography variant="body1" sx={{ fontWeight: "600" }}>
                                            {user.lastName || "Kiritilmagan"}
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: "#666",
                                                fontWeight: "500",
                                                marginBottom: "5px",
                                            }}
                                        >
                                            Username:
                                        </Typography>
                                        <Typography variant="body1" sx={{ fontWeight: "600" }}>
                                            @{user.username || "Kiritilmagan"}
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: "#666",
                                                fontWeight: "500",
                                                marginBottom: "5px",
                                            }}
                                        >
                                            Telefon:
                                        </Typography>
                                        <Typography variant="body1" sx={{ fontWeight: "600" }}>
                                            {user.phone || "Kiritilmagan"}
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: "#666",
                                                fontWeight: "500",
                                                marginBottom: "5px",
                                            }}
                                        >
                                            Telegram ID:
                                        </Typography>
                                        <Typography variant="body1" sx={{ fontWeight: "600" }}>
                                            {user.telegramId}
                                        </Typography>
                                    </Box>

                                    {user.roles && user.roles.length > 0 && (
                                        <Box>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: "#666",
                                                    fontWeight: "500",
                                                    marginBottom: "5px",
                                                }}
                                            >
                                                Rollar:
                                            </Typography>
                                            <Typography variant="body1" sx={{ fontWeight: "600" }}>
                                                {user.roles.join(", ")}
                                            </Typography>
                                        </Box>
                                    )}
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Container>
            </Stack>
        </Stack>
    )
}

export default Profile
