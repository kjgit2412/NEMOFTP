import apiRequest from '../../lib/apiRequest'
import { LoginFormType, UserInfo } from '../../modules/userTypes'
import cookie from 'react-cookies';
/**
 * 로그인 처리 
 * 
 * @param form 
 * @returns 
 */
export const loginProcess = (form: LoginFormType): Promise<string> => new Promise<string>((resolve, reject) =>  apiRequest("/member/token", "POST", form)
        .then((res) => {
            if (res.data.success) {
                const token = res.data.data.accessToken
                resolve(token)
            } else {
                reject(res.data)
            } 
            
        })
        .catch((err) => reject(err)))

/** 회원정보 조회  */
export const getLoginInfo = () : Promise<UserInfo> => new Promise<UserInfo>((resolve, reject) => {
    const token = cookie.load('token')
    if (!token) {
        reject("login.fail")
        return;
    }
    const headers = {
        Authorization : `Bearer ${token}`
    }

    return apiRequest("/member/info", "GET", {}, headers)
        .then((res) => {
            if (res.data.success) {
                const data = res.data.data;
                const userInfo = {
                    token,
                    userNo: data.seq,
                    email: data.email,
                    userNm: data.name,
                    type: '',
                    company: data.companyName,
                    department: data.department,
                    cellPhone: data.cellPhone
                }
    
                resolve(userInfo)
            } else {
                reject(res.data)
                cookie.remove("token")
            }
        })
        .catch((err) => {
            reject(err)
            cookie.remove("token")
        })
})