import {Box, Stack, Container} from "@mui/material";

const Profile = () => {
    return (
        <Stack>
            <Stack className="page-header">
                <Container>
                    <div className="page-header-content">
                        <h1 className="page-title">Profil</h1>
                        <nav className="breadcrumb-nav">
                            <a href="/" className="breadcrumb-link">Asosiy</a>
                            <span className="breadcrumb-separator">/</span>
                            <span className="breadcrumb-current">Profil</span>
                        </nav>
                    </div>
                </Container>
            </Stack>

            <Stack>
                <Box className="container-custom">

                </Box>
            </Stack>
        </Stack>
    );
};

export default Profile;