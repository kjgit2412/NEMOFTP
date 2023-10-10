import { Helmet } from 'react-helmet-async'
import FindPwContainer from '../containers/FindPwContainer'
import { useTranslation } from 'react-i18next'

const FindPw = () => {
    const { t } = useTranslation()

    return (
        <>
            <Helmet>
                <title>{t('findPw')} : NOVASEMI</title>
            </Helmet>
            <FindPwContainer />
        </>
    )
}

export default FindPw