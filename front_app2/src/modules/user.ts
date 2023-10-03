import { createAction, handleActions } from 'redux-actions'
import { produce } from 'immer'
import { UserActionType, UserInitialState, UserInfo } from './userTypes'

const LOGIN: UserActionType = 'user/LOGIN'
const LOGOUT: UserActionType = 'user/LOGOUT'

export const login = createAction(LOGIN)
export const logout = createAction(LOGOUT)

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
      mobile: '',
    },
}

const user = handleActions(
    {
      [LOGIN]: (state, { payload: userInfo } : { payload: UserInfo }) =>
        produce(state, (draft: UserInitialState) => {
          draft.userInfo = userInfo;
          draft.isLogin = true;
        }),
      [LOGOUT]: (state) =>
        produce(state, (draft) => {
          draft.isLogin = false;
          draft.userInfo = { ...initialState.userInfo }
        }),
    },
    initialState,
  )

  export default user