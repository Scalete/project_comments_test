import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.API_URL,
});

axiosInstance.interceptors.request.use(
    async (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;