import Axios from 'axios'

export const URLStatsAPI = async (code) => {
    try {
        const res = await Axios.get(`${import.meta.env.VITE_SERVER_URL}/url/stats/${code}`,{
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });
        console.log(res.data.URLObject)
        return { success: res.data.success , URLObject : res.data.URLObject , message : res.data.message }
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