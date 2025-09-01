import axios from'./api'

const AuthService = {
    async login (code) {
        const response = await  axios.post(`/auth/${code}`)
        return response.data
    }
}

export default AuthService