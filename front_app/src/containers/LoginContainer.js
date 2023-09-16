import { connect } from 'react-redux';
import { login } from '../modules/user';
import LoginForm from '../components/member/LoginForm';

const LoginContainer = ({ isLogin, login }) => {
  return <LoginForm isLogin={isLogin} onLogin={login} />;
};

export default connect(
  (state) => ({
    isLogin: state.user.isLogin,
  }),
  {
    login,
  },
)(LoginContainer);
