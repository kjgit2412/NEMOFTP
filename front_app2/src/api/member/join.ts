import apiRequest from '../../lib/apiRequest';
import { JoinFormType, UserInfo } from '../../modules/userTypes';
export const checkUserExists = (userId) => new Promise((resolve, reject) => {
    apiRequest(`/member/exists/${userId}`)
        .then((res) => {
            if (res.data.success) {
                resolve(true);
            } else {
                reject(new Error("Not Reigstered"))
            }
        })
        .catch((err) => {
            console.log(err)
            reject(err)
        })
})

export const registerUser = (form : JoinFormType) : Promise<UserInfo> => new Promise<UserInfo>((resolve, reject) => {
    apiRequest(`/member`, "POST", form)
        .then((res) => {
            const data = res.data.data;
            resolve({
                userNo: data.seq,
                email: data.email,
                userNm: data.name,
                type: data.type || '',
                company: data.company,
                department: data.department,
                cellPhone: data.cellPhone
            } as UserInfo)
        })
        .catch ((err) => {
            resolve(err)
        })
});