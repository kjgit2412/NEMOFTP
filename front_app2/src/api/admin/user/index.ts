import apiRequest from "../../../lib/apiRequest"
import { UserSearchType } from '../../../modules/userTypes'


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

