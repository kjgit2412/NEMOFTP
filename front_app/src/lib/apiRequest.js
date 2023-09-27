import axios from 'axios';

export default function apiRequest(url, method, data, headers) {
   if (!/^http[s]?/i.test(url)) url = process.env.REACT_APP_API_URL + url; 
    return axios({
        method,
        url,
        data,
        headers
    });
};