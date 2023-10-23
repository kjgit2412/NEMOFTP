import Title from '../../../components/common/Title'
import { useTranslation } from 'react-i18next'
const InfoForm = () => {
    const { t } = useTranslation()

    return (
        <>
            <Title bottomline="true">{t('회원정보수정')}</Title>
        </>
    )
}

export default InfoForm