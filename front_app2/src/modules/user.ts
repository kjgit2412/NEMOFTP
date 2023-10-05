import { createAction, handleActions } from 'redux-actions'
import { produce } from 'immer'
import { UserActionType, UserInitialState, UserInfo } from './userTypes'

const UPDATE: UserActionType = 'user/UPDATE'
const LOGOUT: UserActionType = 'user/LOGOUT'

const initialState: UserInitialState = {
  isLogin: false,
  userInfo: {
    token: '',
    userNo: 0,
    email: '',
    userNm: '',
    type: '',
    company: '',
    department: '',
    cellPhone: '',
  },
}

export const updateUserInfo = createAction(UPDATE, (userInfo : UserInfo) : UserInfo => userInfo)
export const logout = createAction(LOGOUT)


const user = handleActions(
    {
      [UPDATE]: (state, { payload : userInfo } : { payload : UserInfo })  => 
        produce(state, (draft: UserInitialState) => {
          if (userInfo) {
            draft.isLogin = true
            draft.userInfo = userInfo
          }
        }),
      [LOGOUT]: (state) =>
        produce(state, (draft) => {
          draft.isLogin = false
          draft.userInfo = { ...initialState.userInfo }
        }),
    },
    initialState,
  )

  export default user