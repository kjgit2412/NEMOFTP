import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"
import IndexContainer from "../../containers/admin/configs/IndexContainer"

const Index = () => {
    const { t } = useTranslation()
    return (
        <>
            <Helmet>
                <title>{t('menu_config')} : NOVASEMI</title>
            </Helmet>
            <IndexContainer />
        </>
    )
}

export default Index