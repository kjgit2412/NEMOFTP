import { FiLock, FiKey, FiUserPlus } from 'react-icons/fi'
import { Links } from '../common/LinkStyle'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const LinksTab = () => {
    const { t } = useTranslation()
    return (
        <Links>
            <Link to="/findId">
            <FiLock />
            {t('findId')}
            </Link>
            <Link to="/findPw">
            <FiKey />
            {t('findPw')}
            </Link>
            <Link to="/join">
            <FiUserPlus />
            {t('join')}
        </Link>
    </Links>
    )
}

export default LinksTab