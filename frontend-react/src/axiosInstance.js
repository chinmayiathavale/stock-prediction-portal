import axios from "axios";


const baseUrl = import.meta.env.VITE_BACKEND_BASE_API

const axiosInstance = axios.create({
    BaseURL : baseUrl,
    headers : {
        'Content-Type' : 'application/json',
    }

})

// Request Intercepter
axiosInstance.interceptors.request.use(
    function (config) {
        // console.log('request for requestIntercepter : ', config);
        const accessToken = localStorage.getItem('accessToken')
        if(accessToken){
            config.headers['Authorization'] = `Bearer ${accessToken}`
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
)


// Response Interceptors
axiosInstance.interceptors.response.use(function (response) {
    return response;
  }, async function (error) {
    // Handle failed responses
    const originalRequest = error.config
    if (error.response.status === 401 && !originalRequest.retry) {
        originalRequest.retry = true;
        const refreshToken = localStorage.getItem('refreshToken')
        try {
            const response = await axiosInstance.post('/token/refresh/', {refresh : refreshToken});
            // console.log('New Access Token',response.data.access)
            localStorage.setItem('accessToken',response.data.access)
            originalRequest.headers['Authorization'] = `Bearer ${accessToken}`
            return axiosInstance(originalRequest);
        } catch(error) {
            // return false;
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            // window.location.href = '/login';
        }
    }
    return Promise.reject(error);
  });



export default axiosInstance;