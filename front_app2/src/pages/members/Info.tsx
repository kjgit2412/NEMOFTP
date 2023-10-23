import { connect } from 'react-redux'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import InfoContainer from '../../containers/admin/members/InfoContainer'
const Info = ({siteTitle}) : JSX.Element => {
    const { t } = useTranslation()
    return (
        <>
            <Helmet>
                <title>{t('menu_member')} : {siteTitle}</title>
            </Helmet>
            <InfoContainer />
        </>
    )
}

export default connect(
    (state: any) => ({ siteTitle: state.config.siteTitle || ''})
)(Info)