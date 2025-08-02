import Axios from "axios";

export const logoutAPI = async () => {
  try {
    const res = await Axios.get(
      `${import.meta.env.VITE_SERVER_URL}/auth/logout`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    return { success: res.data.success };
  } catch (error) {
    console.log(error.message);
    return {
      success: false,
    };
  }
};
