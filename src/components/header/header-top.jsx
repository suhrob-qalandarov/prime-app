import { Box, Stack } from "@mui/material"

const HeaderTop = () => {
    return (
        <div className="fixed z-[999] w-full bg-[#f8f9fb]">
            <Box className="w-full overflow-hidden">
                <div className="whitespace-nowrap text-red-500 text-sm font-semibold animate-marquee">
                    {Array(20).fill("SAYT HOZIRDA TEST REJIMIDA ISHLAYAPTI!  •  XATOLIK HAQIDA SUPPORTGA YOZING!").join(" • ")}
                </div>
            </Box>
        </div>
    )
}

export default HeaderTop
