import Axios from 'axios'

export const URLRedirectAPI = async (code) => {
  try {
    const res = await Axios.get(`${import.meta.env.VITE_SERVER_URL}/url/${code}`, {
      headers: { "Accept": "application/json" }, // ensures backend knows we want JSON
      withCredentials : true,
    });
    return { success: true, URLObject: res.data.URLObject };
  } catch (error) {
    return { success: false, message: error.message };
  }
};