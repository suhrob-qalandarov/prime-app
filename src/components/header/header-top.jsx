import { Box, Stack } from "@mui/material"

const HeaderTop = () => {
    return (
        <Stack sx={{ position: "sticky", top: "0", zIndex: 1001, backgroundColor: "#f8f9fb" }}>
            <Box className="w-full overflow-hidden">
                <div className="whitespace-nowrap text-red-500 text-sm font-semibold animate-marquee">
                    {Array(20).fill("SAYT HOZIRDA TEST REJIMIDA ISHLAYAPTI!  •  XATOLIK HAQIDA SUPPORTGA YOZING!").join(" • ")}
                </div>
            </Box>
        </Stack>
    )
}

export default HeaderTop
