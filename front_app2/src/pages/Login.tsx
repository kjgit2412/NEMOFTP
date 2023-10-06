import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import LoginContainer from '../containers/LoginContainer'
const Login = () : JSX.Element => {
  const { t } = useTranslation()
  return (
    <>
      <Helmet>
        <title>{t('login')} : NOVASEMI</title>
      </Helmet>
      <LoginContainer />
    </>
  );
};

export default Login
