import axios from "axios";

const axiosPublic = axios.create({
    // baseURL: 'https://matrimony-server-chi.vercel.app/'
    baseURL: 'https://backend-two-theta-46.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;