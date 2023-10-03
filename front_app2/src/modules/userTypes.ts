export interface UserInfo {
    token: string
    userNo: number
    email: string
    userNm: string
    type: string
    company: string
    department: string
    mobile: string
}
export type UserActionType = 'user/LOGIN' | 'user/LOGOUT'
export type UserInitialState = {
    isLogin: boolean
    userInfo: UserInfo
}