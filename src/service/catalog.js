import axios from "./api.js"

const CategoryService = {

    // Get categories
    async getCategories() {
        try {
            const response = await axios.get(`/category`)
            return response.data
        } catch (error) {
            console.error("Error fetching orders:", error)
            throw error
        }
    },

    async getCategoriesBySpotlightName(name) {
        try {
            const response = await axios.get(`/category/${name}`)
            return response.data
        } catch (error) {
            console.error("Error fetching orders:", error)
            throw error
        }
    },
}

export default CategoryService