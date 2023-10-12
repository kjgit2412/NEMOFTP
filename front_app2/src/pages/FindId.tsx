import { connect } from 'react-redux'
import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"
import FindIdContainer from "../containers/FindIdContainer"
const FindId = ({siteTitle}) => {
    const { t } = useTranslation()
    return (
        <>
            <Helmet>
                <title>{t('findId')} : {siteTitle}</title>
            </Helmet>
            <FindIdContainer />
        </>
    )
}

export default connect(
    (state: any) => ({ siteTitle: state.config.siteTitle || '' })
)(FindId)