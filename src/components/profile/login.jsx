import {Box, Button, LinearProgress, Snackbar, Stack} from "@mui/material"
import "./login.css"
import { useState, useRef, useEffect } from "react"
import AuthService from "../../service/auth"
import { useNavigate, useSearchParams } from "react-router-dom"

const Login = () => {
    const token = localStorage.getItem("prime-token")
    const [code, setCode] = useState(["", "", "", "", "", ""])
    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [openSnackbar, setOpenSnackbar] = useState(false)
    const [progress, setProgress] = useState(100)
    const inputRefs = useRef([])
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const isLogout = searchParams.get("logout") === "true"

    useEffect(() => {
        if (token) {
            navigate("/profile")
        } else if (isLogout) {
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
        }
    }, [token, navigate, isLogout])

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false)
        setProgress(100)
    }

    const handleInputChange = (index, value) => {
        if (value.length > 1) return // Prevent multiple characters

        const newCode = [...code]
        newCode[index] = value
        setCode(newCode)

        // Move to next input if value is entered
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus()
        }

        // Submit when all 6 digits are entered
        if (index === 5 && value) {
            const fullCode = newCode.join("")
            if (fullCode.length === 6) {
                submitCode(fullCode)
            }
        }
    }

    const handleKeyDown = (index, e) => {
        // Move to previous input on backspace if current input is empty
        if (e.key === "Backspace" && !code[index] && index > 0) {
            inputRefs.current[index - 1]?.focus()
        }
    }

    const submitCode = async (enteredCode) => {
        setIsLoading(true)
        setErrorMessage("")
        setSuccessMessage("")

        try {
            const response = await AuthService.login(enteredCode)

            const { token, userRes } = response

            // Save to localStorage
            localStorage.setItem("prime-token", token)
            localStorage.setItem("prime-user", JSON.stringify(userRes))

            setSuccessMessage("Muvaffaqiyatli kirildi!")

            // Navigate to profile after 1 second
            setTimeout(() => {
                navigate("/profile")
            }, 1000)
        } catch (error) {
            setErrorMessage("Noto'g'ri kod qayta urunib ko'ring!")
            // Clear inputs on error
            setCode(["", "", "", "", "", ""])
            inputRefs.current[0]?.focus()
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        // Focus first input on component mount
        inputRefs.current[0]?.focus()
    }, [])

    return (
        <Stack
            sx={{
                minHeight: "92vh",
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
                padding: "40px 0",
                marginTop: "70px",
            }}
        >
            <div className="login-content">
                <Box
                    component="img"
                    src="/images/bot/prime77.jpeg"
                    alt="Telegram Bot"
                    className="login-bot-logo"
                    sx={{
                        width: 100,
                        height: 100,
                        borderRadius: "50%",
                        objectFit: "cover",
                        marginBottom: 5,
                        boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
                    }}
                />
                <h2
                    className="main-title"
                    sx={{
                        fontFamily: "Noto Sans",
                    }}
                >
                    Kodni Kiriting
                </h2>

                <Box
                    className="login-description"
                    sx={{
                        fontFamily: "Noto Sans",
                    }}
                >
                    <a className="login-bot-name" href="https://t.me/ooddiiy_bot" target="_blank" rel="noopener noreferrer">
                        @prime_77_bot
                    </a>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;telegram botiga kiring va 1 daqiqalik
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    kodingizni oling.
                </Box>

                <form id="loginForm">
                    <div className="code-inputs">
                        {code.map((digit, index) => (
                            <input
                                key={index}
                                ref={(el) => (inputRefs.current[index] = el)}
                                type="text"
                                className="code-input"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                disabled={isLoading}
                            />
                        ))}
                    </div>

                    {errorMessage && (
                        <div className="alert alert-danger" style={{ display: "block" }}>
                            {errorMessage}
                        </div>
                    )}
                    {successMessage && (
                        <div className="alert alert-success" style={{ display: "block" }}>
                            {successMessage}
                        </div>
                    )}

                    {isLoading && (
                        <div className="text-center">
                            <div className="spinner" style={{ display: "block" }}></div>
                            <p className="status-text">Tekshirilmoqda...</p>
                        </div>
                    )}
                </form>
            </div>

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
                            fill="red"
                            style={{ marginRight: "8px" }}
                        >
                            <path d="M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z" />
                        </svg>
                        <span>Siz hisobingizdan chiqdingiz!</span>
                        <div style={{ position: "absolute", bottom: "-12px", left: 0, right: 0, height: "4px", backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
                            <div
                                style={{
                                    width: `${progress}%`,
                                    height: "4px",
                                    backgroundColor: "red",
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

export default Login
