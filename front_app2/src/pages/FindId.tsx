import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"
import FindIdContainer from "../containers/FindIdContainer"
const FindId = () => {
    const { t } = useTranslation()
    return (
        <>
            <Helmet>
                <title>{t('findId')}</title>
            </Helmet>
            <FindIdContainer />
        </>
    )
}

export default FindId