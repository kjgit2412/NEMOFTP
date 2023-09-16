import { Helmet } from 'react-helmet-async';
import LoginContainer from '../containers/LoginContainer';
const Login = () => {
  return (
    <>
      <Helmet>
        <title>로그인 : NOVASEMI</title>
      </Helmet>
      <LoginContainer />
    </>
  );
};

export default Login;
