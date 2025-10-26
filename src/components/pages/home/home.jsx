import { spotlights } from "../../../constants"
import { Box, Stack } from "@mui/material"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <Stack className="p-0 mt-20">
                <Stack className="w-full px-0">
                    <Box className="flex flex-wrap gap-0" id="categoriesContainer">
                        {spotlights.map((cat, index) => (
                            <div className="w-1/2 md:w-1/4" key={index}>
                                <Link
                                    to={"/catalog?" + cat.url}
                                    className="group block overflow-hidden relative mb-0 shadow-none transition-all duration-300 cursor-pointer rounded-none aspect-[3/5]"
                                >
                                    <img
                                        src={cat.image || "/placeholder.svg"}
                                        alt={cat.name}
                                        className="w-full h-[480px] md:h-[768px] object-cover block transition-transform duration-300 relative group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center p-6 z-20 transition-all duration-300">
                                        <div className="text-amber-50 uppercase text-lg font-medium font-sans m-0 transition-all duration-300 text-center group-hover:text-[#8b1538]">
                                            {cat.name}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </Box>
                </Stack>
            </Stack>
        </div>
    )
}

export default Home
