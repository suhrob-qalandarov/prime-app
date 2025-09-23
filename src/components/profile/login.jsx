import { Box, Stack } from "@mui/material"
import "./login.css"
import { useState, useRef, useEffect } from "react"
import AuthService from "../../service/auth"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [code, setCode] = useState(["", "", "", "", "", ""])
    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const inputRefs = useRef([])
    const navigate = useNavigate()

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
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(userRes))

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
        </Stack>
    )
}

export default Login
