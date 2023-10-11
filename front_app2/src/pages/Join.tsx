import { connect } from 'react-redux'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import JoinContainer from '../containers/JoinContainer'

const Join = ({ siteTitle }): JSX.Element => {
  const { t } = useTranslation()
  return (
    <>
      <Helmet>
        <title>{t('join_title')} : {siteTitle}</title>
      </Helmet>
      <JoinContainer />
    </>
  );
};

export default connect(
  (state: any) => ({ siteTitle: state.config.siteTitle })
)(Join);
