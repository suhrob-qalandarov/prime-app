import {Box, Stack} from "@mui/material";

const Catalog = () => {
    return (
        <Stack>
            {/* Page Header */}
            <Box className="page-header">
                <div className="container-custom">
                    <div className="page-header-content">
                        <h1 className="page-title">Katalog</h1>
                        <nav className="breadcrumb-nav">
                            <a href="/" className="breadcrumb-link">Asosiy</a>
                            <span className="breadcrumb-separator">/</span>
                            <span className="breadcrumb-current">Katalog</span>
                        </nav>
                    </div>
                </div>
            </Box>
        </Stack>
    );
};

export default Catalog;