export interface UserInfo {
    token?: string
    seq?: number
    userNo: number
    email: string
    userNm: string
    type: string
    company: string
    department: string
    cellPhone: string,
    checked: boolean
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
    agree: boolean
}

export type LoginFormType = {
    email : string
    password: string
}

// 검색 항목 타입
export type UserSearchType = {
    page: number
    limit: number
    sopt?: string // 검색 조건
    skey?: string // 검색어 
    email?: string
    name?: string
    cellPhone?: string
}