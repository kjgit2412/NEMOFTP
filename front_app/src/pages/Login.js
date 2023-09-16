import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import Title from '../components/common/Title';
import StyledButton1 from '../components/common/StyledButton1';
const OuterBox = styled.div`
  display: flex;
  align-items: center;
`;

const InnerBox = styled.div`
  width: 350px;
  margin: 10px auto 0 auto;
  input {
    width: 100%;
    display: block;
    border: 1px solid #d5d5d5;
    height: 45px;
    border-radius: 3px;
    margin-bottom: 5px;
    text-align: center;
    font-size: 1.15rem;
  }
  input:focus {
    border: 1px solid #36466d;
  }
`;

const Login = () => {
  return (
    <>
      <Helmet>
        <title>로그인 : NOVASEMI</title>
      </Helmet>
      <OuterBox className="layout_width content_box">
        <InnerBox>
          <Title align="center">관리자 로그인</Title>
          <input type="text" placeholder="이메일 주소 입력" />
          <input type="password" placeholder="비밀번호 입력" />
          <StyledButton1>로그인</StyledButton1>
        </InnerBox>
      </OuterBox>
    </>
  );
};

export default Login;
