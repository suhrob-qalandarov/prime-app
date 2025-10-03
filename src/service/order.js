import axios from "./api.js"

const OrderService= {

    // Get orders by ID
    async getOrdersById(id) {
        try {
            const response = await axios.get(`/order/${id}`, { withCredentials: true })
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
    },

    // User confirm order
    async confirmOrder(orderData) {
        try {
            const token = localStorage.getItem('prime-token');
            const response = await axios.post(`/order`, orderData, {
                headers: {
                    Authorization: `${token}`,
                },
            });
            return response.data
        } catch (error) {
            console.error("Error creating order:", error)
            throw error
        }
    },
}

export default OrderService