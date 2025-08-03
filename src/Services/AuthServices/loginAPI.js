import Axios from 'axios'

export const loginAPI = async (data) => {
    try {
        const res = await Axios.post(`${import.meta.env.VITE_SERVER_URL}/auth/login`, data, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });
        return { success: res.data.success, message: res.data.message, userData : res.data.user }
    } catch (error) {
        console.log(error.message)
        if (error.response && error.response.data) {
            return {
                success: false,
                message: error.response.data.message || "something went wrong",
            };
        }
        return {
            success: false,
            message: error.message || "Network error occured",
        };
    }
}