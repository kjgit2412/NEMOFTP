import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';

export const login = createAction(LOGIN);
export const logout = createAction(LOGOUT);

const initialState = {
  isLogin: false,
  userInfo: {
    token: '',
    userNo: '',
    email: '',
    userNm: '',
    type: '',
    company: '',
    department: '',
    mobile: '',
  },
};
const user = handleActions(
  {
    [LOGIN]: (state, { payload: userInfo }) =>
      produce(state, (draft) => {
        draft.userInfo = userInfo;
        draft.isLogin = true;
      }),
    [LOGOUT]: (state) =>
      produce(state, (draft) => {
        draft.isLogin = false;
        draft.userInfo = { ...initialState.userInfo };
      }),
  },
  initialState,
);

export default user;
