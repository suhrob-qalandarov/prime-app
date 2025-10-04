import axios from "./api.js"

const ProductService = {

    // Get products
    async getProducts() {
        try {
            const response = await axios.get(`/product`)
            return response.data
        } catch (error) {
            console.error("Error fetching orders:", error)
            throw error
        }
    },

    // Get products by category
    async getProductsByCategoryId(categoryId) {
        try {
            const response = await axios.get(`/product/by-category/${categoryId}`)
            return response.data
        } catch (error) {
            console.error("Error fetching orders:", error)
            throw error
        }
    },
}

export default ProductService