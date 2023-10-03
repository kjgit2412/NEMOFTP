import axios from 'axios';


export default function apiRequest(url:string, method?:string, data?:{}, headers?:{}) {
    method = method || "GET";
   if (!/^http[s]?/i.test(url)) url = process.env.REACT_APP_API_URL + url; 
   
    return axios({
        method,
        url,
        data,
        headers
    });
};