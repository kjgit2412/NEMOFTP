/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { FiLock, FiKey, FiUserPlus } from 'react-icons/fi'
import styled from 'styled-components'
import Title from '../common/Title'
import StyledButton1 from '../common/StyledButton1'
import ErrorMessage from '../common/ErrorMessage'
import { OuterBox, InnerBox } from '../common/LayoutBox'
import { useTranslation } from 'react-i18next'
import { loginProcess } from '../../api/member/login'
import { LoginFormType  } from '../../modules/userTypes'
import { updateUserInfo } from '../../modules/user'
import { getLoginInfo } from '../../api/member/login'
import { UserInfo } from '../../modules/userTypes'
import cookie from 'react-cookies'


const Links = styled.div`
    display: flex;
    padding: 10px;
    background: #fff;
    border-bottom: 1px solid #d5d5d5;
    a {
      flex-grow: 1; 
      width: 0;
      text-align: center;
      svg { 
        vertical-align: middle;
        position: relative; 
        top: -2px;
        margin-right: 3px;
      }
      &:hover {
        text-decoration: underline;
      }
    }
`;

const LoginForm = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' } as LoginFormType)
  const [message, setMessage] = useState('');
  const inputEmail = React.createRef<HTMLInputElement>()
  const inputPassword = React.createRef<HTMLInputElement>()
  
  

  const dispatch = useDispatch()

  useEffect(() => {
    if (inputEmail.current)
      inputEmail.current.focus()

  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  };

  const onSubmit = async (e) => {
    e.preventDefault()

    if (!form.email.trim()) {
      setMessage(t('required_email'));
      if (inputEmail.current) 
        inputEmail.current.focus();

      return;
    }

    if (!form.password.trim()) {
      setMessage(t('required_password'))

      if (inputPassword.current)
        inputPassword.current.focus();
    }
    
    try {
      /** 로그인 처리 S */
      const token = await loginProcess(form)
      const expires = new Date()
      expires.setDate(expires.getDate() + 7)
      cookie.save("token", token, {
          path : '/',
          expires,
          //httpOnly: true
      })

      setForm({email: '', password: ''})
      getLoginInfo()
        .then((userInfo: UserInfo) => dispatch(updateUserInfo(userInfo)))
        .catch((err) => console.error(err))

      navigate("/", {replace: true})
      /** 로그인 처리 E */

    } catch (err: any) {
      if (err.message === 'login_fail') setMessage(t(err.message))
      else setMessage(err.message)
    }
  };

  return (
    <>
      <OuterBox className="layout_width content_box">
        <InnerBox>
            <Title align="center">{t('login_title')}</Title>
            <form autoComplete="off" onSubmit={onSubmit}>
              <input
                type="text"
                name="email"
                placeholder={t('login_email')}
                onChange={handleChange}
                ref={inputEmail}
                value={form.email}
              />
              <input
                type="password"
                name="password"
                placeholder={t('login_password')}
                onChange={handleChange}
                ref={inputPassword}
                value={form.password}
              />
              {message && <ErrorMessage>{message}</ErrorMessage>}
              <StyledButton1 type="submit">{t('login')}</StyledButton1>
          </form>
          <Links>
            <Link to="/findId">
              <FiLock />
              {t('findId')}
            </Link>
            <Link to="/findPw">
              <FiKey />
              {t('findPw')}
            </Link>
            <Link to="/join">
              <FiUserPlus />
              {t('join')}
            </Link>
          </Links>
        </InnerBox>
      </OuterBox>
    </>
  );
};

export default React.memo(LoginForm)
