import { connect } from 'react-redux'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import LoginContainer from '../containers/LoginContainer'
const Login = ({siteTitle}) : JSX.Element => {
  const { t } = useTranslation()
  return (
    <>
      <Helmet>
        <title>{t('login')} : {siteTitle} </title>
      </Helmet>
      <LoginContainer />
    </>
  );
};

export default connect(
  (state:any) => ({ siteTitle: state.config.siteTitle || ''})
)(Login)
