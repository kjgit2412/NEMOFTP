import { connect } from 'react-redux'
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdLogin, MdLogout, MdAccountBox } from 'react-icons/md';
import { useTranslation } from 'react-i18next'
import { UserInitialState } from '../modules/userTypes';
import { logout } from '../modules/user';
import { UserInfo } from '../modules/userTypes';
const Box = styled.header`
  position: fixed;
  z-index: 1;
  top: 0; 
  left: 0; 
  width: 100%; 
  background: #36466d;
  padding: 10px 15px;
  min-width: 1200px;
  .inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .left { 
    display: flex;
    align-items: center;
  }
`;

const Buttons = styled.div`
  a, button {
    background: #fff;
    border-radius: 5px;
    padding: 7px 15px;
    font-size: 1.3rem;
    font-weight: 500;
    transition: all 0.3s ease-in;
    line-height: 1;
    border: 0;
    height: 38px;
    vertical-align: middle;
    svg {
      vertical-align: middle;
      font-size: 1.3rem;
      margin-right: 5px;
    }
  }
  a + a, button+button, button+a, a+button {
    margin-left: 5px;
  }
  a:hover, button:hover {
    background: #000;
    color: #fff;
    * {
      color: #fff;
    }
  }
`;

const UserInfoBox = styled.span`
  vertical-align: middle;
  margin-left: 15px;
  font-size: 1rem;
  box-shadow: 2px 2px 5px #212121;
  background: #d5d5d5;
  padding: 3px 15px;
  border-radius: 5px;
  font-weight: bold;
  color: #36466d;
`

type headerProps = {
  isLogin: boolean
  userInfo: UserInfo
  logout: Function
}

const Header = ({ isLogin, userInfo, logout }: headerProps ): JSX.Element => {
  return (
    <>
    <Box>
      <div className='inner'>
        <div className="left">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>
        {isLogin && <UserInfoBox>{userInfo.userNm}({userInfo.email})님 로그인</UserInfoBox>}
        </div>
        <Buttons>
          <LinkBox isLogin={isLogin} logout={logout}></LinkBox>
        </Buttons>
      </div>
    </Box>
   
    </>
  )
};

const LinkBox = ({isLogin, logout}) => {
  const { t } = useTranslation()
  if (isLogin) {
    return (
      <>
      <button onClick={logout}>
          <MdLogout />
          {t('logout')}
      </button>
      <Link to="/mypage">
        <MdAccountBox />
        {t('mypage')}
      </Link>
      </>
    )
  } else {
    return (
      <>
      <Link to="/login">
          <MdLogin />
          {t('login')}
      </Link>
      <Link to="/join">{t('join')}</Link>
      </>
    )
  }
};

export default connect(
  (state: any) : UserInitialState => ({
    isLogin: state.user.isLogin,
    userInfo: state.user.userInfo
  }),
  {
    logout
  }
)(Header)
