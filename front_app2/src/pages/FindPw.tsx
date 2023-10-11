import { connect } from 'react-redux'
import { Helmet } from 'react-helmet-async'
import FindPwContainer from '../containers/FindPwContainer'
import { useTranslation } from 'react-i18next'

const FindPw = ({siteTitle}) => {
    const { t } = useTranslation()

    return (
        <>
            <Helmet>
                <title>{t('findPw')} : {siteTitle}</title>
            </Helmet>
            <FindPwContainer />
        </>
    )
}

export default connect(
    (state: any) => ({ siteTitle: state.config.siteTitle })
)(FindPw)