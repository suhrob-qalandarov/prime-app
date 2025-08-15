import {Box, Stack} from "@mui/material";
import './login.css';

const Login = () => {
    return (
        <Stack className="collection-page">
            <section className="page-header">
                <div className="container-custom">
                    <div className="login-content">
                        <Box
                            component="img"
                            src="/images/bot/prime77.jpeg"
                            alt="Telegram Bot"
                            className="login-bot-logo"
                            sx={{
                                width: 100,
                                height: 100,
                                borderRadius: '50%',
                                objectFit: 'cover',
                                marginBottom: 5,
                                boxShadow: '0 4px 8px rgba(0,0,0,0.15)'
                            }}
                        />
                        <h2 className="main-title" sx={{
                            fontFamily: 'Noto Sans'
                        }}>
                            Kodni Kiriting
                        </h2>

                        <Box className="login-description" sx={{
                                 fontFamily: 'Noto Sans'
                             }}>
                            <a
                                className='login-bot-name'
                                //href="https://t.me/prime_77_bot"
                                href='https://t.me/ooddiiy_bot'
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                @prime_77_bot
                            </a>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;telegram botiga kiring va 1 daqiqalik &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; kodingizni oling.
                        </Box>


                        <form id="loginForm">
                            <div className="code-inputs">
                                <input type="text" className="code-input" maxLength={1} data-index="0" />
                                <input type="text" className="code-input" maxLength={1} data-index="1" />
                                <input type="text" className="code-input" maxLength={1} data-index="2" />
                                <input type="text" className="code-input" maxLength={1} data-index="3" />
                                <input type="text" className="code-input" maxLength={1} data-index="4" />
                                <input type="text" className="code-input" maxLength={1} data-index="5" />
                            </div>

                            <div id="errorMessage" className="alert alert-danger" style={{ display: 'none' }}></div>
                            <div id="successMessage" className="alert alert-success" style={{ display: 'none' }}></div>

                            {/*<div className="text-center">
                                <div className="spinner" id="loadingSpinner"></div>
                                <p id="statusText" className="status-text"></p>
                            </div>*/}
                        </form>
                    </div>
                </div>
            </section>
        </Stack>
    );
};

export default Login;