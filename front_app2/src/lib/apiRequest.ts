import axios from 'axios'
import cookie from 'react-cookies';

export default function apiRequest(url:string, method?:string, data?:{}, headers?:{} ) {
    method = method || "GET";
   if (!/^http[s]?/i.test(url)) url = process.env.REACT_APP_API_URL + url
   const token = cookie.load("token")
   if (token) {
    headers = headers || {}
    headers['Authorization'] = `Bearer ${token}`;
   }
    return axios({
        method,
        url,
        data,
        headers,
        validateStatus: (state) => state < 500
    })
    
}