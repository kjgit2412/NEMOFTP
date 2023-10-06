import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import LoginForm from '../components/member/LoginForm'

const LoginContainer = () : JSX.Element => {
  const isLogin = useSelector((state:any) => state.user.isLogin)  

  if (isLogin) {
    return <Navigate to="/" replace={true} />;
  }
  
  return <LoginForm />;
};

export default React.memo(LoginContainer)
