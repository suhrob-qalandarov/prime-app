import axios from "./api.js"

const OrderService= {

    // Get orders by ID
    async getOrdersById(id) {
        try {
            const response = await axios.get(`/v1/order/${id}`, { withCredentials: true })
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
            const response = await axios.post(`/v1/order`, orderData, {
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