import apiRequest from '../../lib/apiRequest'
import { LoginFormType, UserInfo } from '../../modules/userTypes'

/**
 * 로그인 처리 
 * 
 * @param form 
 * @returns 
 */
export const loginProcess = (form: LoginFormType): Promise<UserInfo> => new Promise<UserInfo>((resolve, reject) => {
    return apiRequest("/member/token", "POST", form)
        .then((res) => {
            if (res.data.success) {
                const token = res.data.data.accessToken;
                console.log(token);
            } 

            
        })
        .catch((err) => reject(err))
})