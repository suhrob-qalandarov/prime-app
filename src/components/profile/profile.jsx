import {Box, Stack} from "@mui/material";

const Profile = () => {
    return (
        <Stack>
            <Box sx={{ width: 500, height: 500, bgcolor: 'background.paper' }}>
                <h1 sx={{ mt: 300, textAlign: 'center' }}>Profil</h1>
            </Box>
        </Stack>
    );
};

export default Profile;