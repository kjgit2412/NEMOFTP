import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login } from '../modules/user';
import LoginForm from '../components/member/LoginForm';

type LoginProps = {
  isLogin?: boolean,
}

const LoginContainer = ({ isLogin }: LoginProps) => {
  if (isLogin) {
    return <Navigate to="/" replace={true} />;
  }
  
  return <LoginForm />;
};

export default connect(
  (state : any) => ({
    isLogin: state.user.isLogin,
  }),
  {},
)(LoginContainer);
