 import React, {useState, useEffect } from 'react'
import Title from '../common/Title'
import StyledButton1 from '../common/StyledButton1'
import ErrorMessage from '../common/ErrorMessage'
import { OuterBox, InnerBox } from '../common/LayoutBox'
import { useTranslation } from 'react-i18next'
import { loginProcess } from '../../api/member/login'
import { LoginFormType  } from '../../modules/userTypes'
const LoginForm = () => {
  const { t } = useTranslation()

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
      const res = await loginProcess(form)
      console.log(res)
    } catch (err: any) {
      setMessage(err.message)
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
              />
              <input
                type="password"
                name="password"
                placeholder={t('login_password')}
                onChange={handleChange}
                ref={inputPassword}
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
