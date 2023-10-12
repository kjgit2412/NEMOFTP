import { connect } from 'react-redux'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import IndexContainer from '../../containers/admin/members/IndexContainer'
const Index = ({siteTitle}) : JSX.Element => {
    const { t } = useTranslation()

    return (
        <>
            <Helmet>
                <title>{t('menu_member')} : {siteTitle}</title>
            </Helmet>
            <IndexContainer />
        </>
    )
}

export default connect(
    (state: any) => ({ siteTitle: state.config.siteTitle || '' })
)(Index)