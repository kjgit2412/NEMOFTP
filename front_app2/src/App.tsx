/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { getLoginInfo } from './api/member/login'
import { getConfig } from './api/admin/config'
import { ConfigType } from './modules/ConfigTypes'
import { updateUserInfo } from './modules/user'
import { updateConfig } from './modules/config'
import cookie from 'react-cookies'
import CommonLayout from './layouts/CommonLayout'
import NotFound from './pages/errors/NotFound'
import Main from './pages/Main'
import Login from './pages/Login'
import Join from './pages/Join'
import FindId from './pages/FindId'
import FindPw from './pages/FindPw'
import MyPage from './pages/MyPage'

/* 사이트 설정 */
import ConfigIndex from './pages/configs/Index'

/* 회원관리 */
import MemberIndex from './pages/members/Index'

const App = (): JSX.Element => {
  const { isLogin, config }   = useSelector((state: any) => ({ isLogin : state.user.isLogin, config: state.config }))
  const token = cookie.load('token')
  const dispatch = useDispatch();
  if (!isLogin && token)  {   
      getLoginInfo()
        .then((userInfo) => dispatch(updateUserInfo(userInfo)))
        .catch((err) => console.error(err))
  }

  /** 설정 업데이트  */
  useEffect(() => {
  getConfig()
    .then((configs: ConfigType) => dispatch(updateConfig(configs)))
    .catch((err) => console.error(err))
  }, [])
  
  return (
    <>
      <Helmet>
        <title>{config.siteTitle}</title>
      </Helmet>
      <Routes>
        <Route element={<CommonLayout />}>
          <Route index element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/findId" element={<FindId />} />
          <Route path="/findPw" element={<FindPw />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/config" element={<ConfigIndex />} />
          <Route path="/member" element={<MemberIndex />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default React.memo(App)