import logo from '../images/f_logo.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Box = styled.footer`
  background: #eee;
  padding: 20px 0;
  position: fixed;
  z-index: 1; 
  left: 0;
  bottom: 0; 
  width: 100%; 
  min-width: 1200px;
  .layout_width {
    align-items: center;
    display: flex;

    a {
      margin-right: 30px;
      img {
        vertical-align: middle;
      }
    }
  }
  ul {
    display: flex;
    li {
      font-size: 1.1rem;
    }
    li + li {
      margin-left: 30px;
    }
  }
`;

const Footer = (): JSX.Element => {
  return (
    <Box>
      <div className="layout_width">
        <Link to="/">
          <img src={logo} alt="footer_logo" />
        </Link>
        <ul>
          <li>노바쎄미(주)</li>
          <li>전화 : 032-576-1355</li>
          <li>팩스 : 032-576-1356</li>
          <li>주소 : 인천광역시 부평구 백범로 587</li>
        </ul>
      </div>
    </Box>
  );
};

export default Footer;
