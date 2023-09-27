import axios from 'axios';

export default function apiRequest(url, method, data, headers) {
    url = /^http[s]?/i.test(url)?url:process.env.REACT_APP_API_URL + url; 
    console.log(url);
    return axios({
        method,
        url,
        data,
        headers
    });
};