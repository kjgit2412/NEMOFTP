export interface UserInfo {
    token?: string
    userNo: number
    email: string
    userNm: string
    type: string
    company: string
    department: string
    cellPhone: string
}
export type UserActionType = 'user/UPDATE' | 'user/LOGOUT' | 'user/INFO'
export type UserInitialState = {
    isLogin: boolean
    userInfo: UserInfo
}

export type JoinFormType = {
    email : string
    password: string
    confirmPassword: string
    name: string
    cellPhone: string
}

export type LoginFormType = {
    email : string
    password: string
}