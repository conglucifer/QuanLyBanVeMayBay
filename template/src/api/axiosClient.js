import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {'content-type': 'application/json'},
    paramsSerializer: params => queryString.stringify({ params }),
});

axios.interceptors.request.use(function (config) {
        // Do something before request is sent
        // Handle token here
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        if(response && response.data){
            return response.data;
        }
        return response;
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
});

export default axiosClient;