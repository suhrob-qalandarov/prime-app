
import {
    Box,
    Stack,
    Container,
    Card,
    CardContent,
    Typography,
    Button,
    Dialog,
    DialogTitle,
    DialogContent, DialogActions,
    Snackbar,
} from "@mui/material"
import { useState, useEffect } from "react"
import {useNavigate, useSearchParams} from "react-router-dom"
import UserOrder from "./user-order";

const Profile = () => {
    const [user, setUser] = useState(null)
    const [quitModal, setQuitModal] = useState(false)
    const [openSnackbar, setOpenSnackbar] = useState(false)
    const [progress, setProgress] = useState(100)
    const [searchParams, setSearchParams] = useSearchParams()
    const isLogin = searchParams.get("login") === "true"
    const navigate = useNavigate()

    useEffect(() => {
        const userData = localStorage.getItem("prime-user")
        if (isLogin) {
            setOpenSnackbar(true)
            const timer = setInterval(() => {
                setProgress((prevProgress) => {
                    if (prevProgress <= 0) {
                        clearInterval(timer)
                        setOpenSnackbar(false)
                        return 0
                    }
                    return prevProgress - (100 / 50)
                })
            }, 100)
            setSearchParams({}, { replace: true });
        }
        if (userData) {
            setUser(JSON.parse(userData))
        }
    }, [isLogin, setSearchParams])

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false)
        setProgress(100)
    }

    const handleQuitOpenModal = () => {
        setQuitModal(true)
    }

    const handleQuitCloseModal = () => {
        setQuitModal(false)
    }

    const handleLogout = () => {
        localStorage.removeItem("prime-token")
        localStorage.removeItem("prime-user")
        localStorage.removeItem("prime-user-orders")
        localStorage.removeItem("fetched-orders-date")
        navigate("/login?logout=true")
    }

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

            <Stack sx={{ padding: "20px 20px", minHeight: "60vh" }}>
                <Box sx={{ display: "flex", gap: "0px", justifyContent: "center", flexWrap: "wrap" }}>
                    <Container maxWidth="md" sx={{ padding: "0px", margin: "0px" }} className="container-custom">
                        <Card
                            sx={{
                                maxWidth: 330,
                                margin: "0 auto",
                                marginTop: "10px",
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
                                        marginBottom: "10px",
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
                                    </Box>
                                </Box>
                                <Button
                                    variant="text"
                                    onClick={handleQuitOpenModal}
                                    sx={{
                                        width: "30%",
                                        fontWeight: "300",
                                        marginTop: "-100px",
                                        left: "160px",
                                        color: "var(--burgundy-color)",
                                        "&:hover": {
                                            backgroundColor: "transparent",
                                            outline: "none",
                                            boxShadow: "none",
                                        },
                                        "&:focus": {
                                            outline: "none",
                                        },
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 256 256"><path d="M124,216a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V40A12,12,0,0,1,48,28h64a12,12,0,0,1,0,24H60V204h52A12,12,0,0,1,124,216Zm108.49-96.49-40-40a12,12,0,0,0-17,17L195,116H112a12,12,0,0,0,0,24h83l-19.52,19.51a12,12,0,0,0,17,17l40-40A12,12,0,0,0,232.49,119.51Z"></path></svg>
                                </Button>
                                <Button
                                    variant="contained"
                                    sx={{
                                        width: "40%",
                                        fontWeight: "200",
                                        fontSize: "12px",
                                        right: "80px",
                                        marginTop: "10px",
                                        backgroundColor: "var(--burgundy-color)",
                                        "&:hover": {
                                            backgroundColor: "var(--burgundy-dark)",
                                        },
                                    }}
                                >
                                    Yangilash
                                </Button>
                            </CardContent>
                        </Card>
                    </Container>
                    <UserOrder user={user} />
                </Box>
            </Stack>

            {/* Quit modal */}
            <Dialog
                open={quitModal}
                onClose={handleQuitCloseModal}
                aria-labelledby="logout-dialog-title"
                aria-describedby="logout-dialog-description"
            >
                <DialogTitle id="logout-dialog-title">Tizimdan Chiqish</DialogTitle>
                <DialogContent>
                    <Typography id="logout-dialog-description">
                        Hisobdan chiqmoqchimisiz?
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleQuitCloseModal} color="primary">
                        Yo'q
                    </Button>
                    <Button onClick={handleLogout} color="error" autoFocus>
                        Ha
                    </Button>
                </DialogActions>
            </Dialog>

            <Snackbar
                open={openSnackbar}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                sx={{
                    "& .MuiSnackbarContent-root": {
                        backgroundColor: "white",
                        color: "black",
                        fontFamily: "Noto Sans",
                        borderRadius: "10px",
                        boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
                        padding: "12px",
                        minWidth: "160px",
                    },
                }}
                message={
                    <div style={{ display: "flex", alignItems: "center", paddingRight: "40px" }}>
                        <svg
                            viewBox="0 0 24 24"
                            width="20"
                            height="20"
                            fill="green"
                            style={{ marginRight: "8px" }}
                        >
                            <path d="M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"></path>
                        </svg>
                        <span>Hisobga muvaffaqiyatli kirildi!</span>
                        <div style={{ position: "absolute", bottom: "-12px", left: 0, right: 0, height: "4px", backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
                            <div
                                style={{
                                    width: `${progress}%`,
                                    height: "4px",
                                    backgroundColor: "green",
                                    transition: "width 0.1s linear",
                                }}
                            />
                        </div>
                    </div>
                }
                action={
                    <Button
                        onClick={handleCloseSnackbar}
                        sx={{
                            position: "absolute",
                            top: "4px",
                            right: "4px",
                            minWidth: "24px",
                            padding: "2px",
                            backgroundColor: "transparent",
                            "&:hover": {
                                backgroundColor: "transparent",
                            },
                            "&:focus": {
                                outline: "none",
                            },
                        }}
                    >
                        <svg
                            width="16"
                            height="16"
                            aria-hidden="true"
                            viewBox="0 0 14 16"
                            fill="black"
                        >
                            <path fillRule="evenodd" d="M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z" />
                        </svg>
                    </Button>
                }
            />
        </Stack>
    )
}

export default Profile
