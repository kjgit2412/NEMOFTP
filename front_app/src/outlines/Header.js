import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Box = styled.header`
  background: #36466d;
  padding: 10px 0;
  .layout_width {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Buttons = styled.div`
  a {
    background: #fff;
    border-radius: 5px;
    padding: 7px 15px;
    font-size: 1.3rem;
    font-weight: 500;
    transition: all 0.3s ease-in;
  }
  a + a {
    margin-left: 5px;
  }
  a:hover {
    background: #000;
    color: #fff;
  }
`;

const Header = () => {
  return (
    <Box>
      <div className="layout_width">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Buttons>
          <Link to="/login">로그인</Link>
          <Link to="/join">회원가입</Link>
        </Buttons>
      </div>
    </Box>
  );
};

export default Header;
