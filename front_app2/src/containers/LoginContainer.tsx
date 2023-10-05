import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { updateUserInfo } from '../modules/user'
import LoginForm from '../components/member/LoginForm'


type LoginProps = {
  isLogin: boolean,
  updateUserInfo: Function,
}

const LoginContainer = ({ isLogin, updateUserInfo }: LoginProps) => {
 
  if (isLogin) {
    return <Navigate to="/" replace={true} />;
  }
  
  updateUserInfo();
  
  return <LoginForm updateUserInfo={updateUserInfo} />;
};

export default connect(
  (state : any) => ({
    isLogin: state.user.isLogin,
  }),
  {
    updateUserInfo
  },
)(LoginContainer);
