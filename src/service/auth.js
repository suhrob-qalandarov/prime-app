import axios from'./api'

const AuthService = {
    async login (code) {
        const response = await  axios.post(`/auth/code/${code}`, {},{ withCredentials: true })
        return response.data
    },

    async me (userId) {
        const response = await  axios.get(`/user/${userId}`,{ withCredentials: true });
        localStorage.setItem("prime-user", JSON.stringify(response.data))
    },

    async logout () {
        localStorage.removeItem("prime-token")
        localStorage.removeItem("prime-user")
        localStorage.removeItem("prime-user-orders")
        localStorage.removeItem("profile-update-count")
        localStorage.removeItem("fetched-orders-date")
        const response = await  axios.post(`/auth/logout`, {},{ withCredentials: true })
    },
}

export default AuthService