import apiRequest from "../../../lib/apiRequest"
import { UserSearchType } from '../../../modules/userTypes'
import { UserInfo } from "../../../modules/userTypes"

export interface ListDataType {
    content: []
    pagination: {}
}


export const initalUserSearchForm: UserSearchType = {
    page: 1,
    limit: 20,
    sopt: '',
    skey: '',
    email: '',
    name: '',
    cellPhone: ''
}

// 회원목록 조회
export const getUsers = (form: UserSearchType) => new Promise<ListDataType>((resolve, reject) => {
    apiRequest("/member/list", "GET", form)
        .then(res => {
            if (res.data.success) {
                resolve(res.data.data)
            } else {
                reject(res.data)
            }
        })
        .catch(err => reject(err))
})

// 회원 조회
export const getUser = (seq : number) => new Promise<UserInfo>((resolve, reject) => {
    apiRequest(`/member/info/${seq}`, "GET")
        .then(res => {
            if (res.data.success) {
                resolve(res.data.data)
            } else {
                reject(res.data)
            }
        })
        .catch(err => reject(err))
})