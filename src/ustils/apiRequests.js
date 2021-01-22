import axios from 'axios';

axios.interceptors.request.use(function (config) {
    const token = "read token from localstorage";
    config.headers.Authorization =  token;
    return config;
});



// (get,post,put,delete,all) methods from this object
let apiService = {
    get: (address, customHeader) => {
        return axios.get(address, apiService.headers(customHeader))
    },
    post: (address, data, customHeader) => {
        return axios.post(address, data, apiService.headers(customHeader))
    },
    put: (address, data, customHeader) => {
        return axios.put(address, data, apiService.headers(customHeader))
    },
    patch: (address, data, customHeader) => {
        return axios.patch(address, data, apiService.headers(customHeader))
    },
    delete: (address, customHeader) => {
        return axios.delete(address, apiService.headers(customHeader))
    },
    all: (arrMethodes) => {
        return axios.all(arrMethodes)
    },
    headers: (customHeader) => {
        let headers = {
            headers: {}
        }
        // custom header
        if (customHeader) {
            customHeader.map((item)=>{
               return headers.headers[Object.keys(item)[0]] = Object.values(item)[0];
            });
        }
        return headers;
    },
}

export default apiService;