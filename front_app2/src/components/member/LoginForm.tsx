import React, {useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Title from '../common/Title'
import StyledButton1 from '../common/StyledButton1'
import ErrorMessage from '../common/ErrorMessage'
import { OuterBox, InnerBox } from '../common/LayoutBox'
import { useTranslation } from 'react-i18next'
import { loginProcess } from '../../api/member/login'
import { LoginFormType  } from '../../modules/userTypes'
import cookie from 'react-cookies'
const LoginForm = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' } as LoginFormType)
  const [message, setMessage] = useState('');
  const inputEmail = React.createRef<HTMLInputElement>()
  const inputPassword = React.createRef<HTMLInputElement>()

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
        </InnerBox>
      </OuterBox>
    </>
  );
};

export default LoginForm;
