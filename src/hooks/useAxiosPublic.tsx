import axios from "axios";

const axiosPublic = axios.create({
    // baseURL: 'https://matrimony-server-chi.vercel.app/'
    // baseURL: 'http://localhost:5000'
    baseURL: 'https://backend-two-theta-46.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
