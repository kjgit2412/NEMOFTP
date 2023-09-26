import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login } from '../modules/user';
import LoginForm from '../components/member/LoginForm';

const LoginContainer = ({ isLogin, login }) => {
  if (isLogin) {
    return <Navigate to="/" replace={true} />;
  }
  
  return <LoginForm onLogin={login} />;
};

export default connect(
  (state) => ({
    isLogin: state.user.isLogin,
  }),
  {
    login,
  },
)(LoginContainer);
