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
}

export default AuthService