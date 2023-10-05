import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import CommonLayout from './layouts/CommonLayout'
import NotFound from './pages/errors/NotFound'
import Main from './pages/Main'
import Login from './pages/Login'
import Join from './pages/Join'
import { getLoginInfo } from './api/member/login'
import { updateUserInfo } from './modules/user'

const App = (): JSX.Element => {

  const dispatch = useDispatch();
  getLoginInfo()
    .then((userInfo) => dispatch(updateUserInfo(userInfo)))
    .catch((err) => console.error(err))
  

  return (
    <>
      <Helmet>
        <title>NOVASEMI</title>
      </Helmet>
      <Routes>
        <Route element={<CommonLayout />}>
          <Route index element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;