import axios from "./api.js"

const OrderService= {
    // Get orders by telegram ID
    async getOrdersByTelegramId(telegramId) {
        try {
            const response = await axios.get(`/orders/bytelegram/${telegramId}`)
            return response.data
        } catch (error) {
            console.error("Error fetching orders:", error)
            throw error
        }
    },
}

export default OrderService