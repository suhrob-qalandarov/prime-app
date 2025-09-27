import axios from "./api.js"

const OrderService= {

    // Get orders by ID
    async getOrdersById(id) {
        try {
            const response = await axios.get(`/orders/${id}`)
            return response.data
        } catch (error) {
            console.error("Error fetching orders:", error)
            throw error
        }
    },

    // Get orders by telegram ID
    async getOrdersByTelegramId(telegramId) {
        try {
            const response = await axios.get(`/orders/by/telegramId/${telegramId}`)
            return response.data
        } catch (error) {
            console.error("Error fetching orders:", error)
            throw error
        }
    },

    // Get orders by phone number
    async getOrdersByPhoneNumber(phoneNumber) {
        try {
            const response = await axios.get(`/orders/by/phoneNumber/${phoneNumber}`)
            return response.data
        } catch (error) {
            console.error("Error fetching orders:", error)
            throw error
        }
    }
}

export default OrderService