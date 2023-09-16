import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Title from '../common/Title';
import StyledButton1 from '../common/StyledButton1';
import ErrorMessage from '../common/ErrorMessage';
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

const LoginForm = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const inputEmail = React.createRef();
  const inputPassword = React.createRef();

  useEffect(() => {
    inputEmail.current.focus();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onProcess = () => {
    if (!form.email.trim()) {
      setMessage('이메일을 입력하세요.');
      inputEmail.current.focus();
      return;
    }

    if (!form.password.trim()) {
      setMessage('비밀번호를 입력하세요.');
      inputPassword.current.focus();
    }
  };
  return (
    <>
      <OuterBox className="layout_width content_box">
        <InnerBox>
          <Title align="center">관리자 로그인</Title>
          <input
            type="text"
            name="email"
            placeholder="이메일 주소 입력"
            onChange={handleChange}
            ref={inputEmail}
          />
          <input
            type="password"
            name="password"
            placeholder="비밀번호 입력"
            onChange={handleChange}
            ref={inputPassword}
          />
          {message && <ErrorMessage>{message}</ErrorMessage>}
          <StyledButton1 onClick={onProcess}>로그인</StyledButton1>
        </InnerBox>
      </OuterBox>
    </>
  );
};

export default LoginForm;
