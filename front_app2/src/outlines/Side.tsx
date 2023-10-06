import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { MdSettingsApplications, MdOutlineManageAccounts } from 'react-icons/md'
import classNames from 'classnames'

const SideBox = styled.aside`
    a {
        display: block;
        height: 60px;
        line-height: 60px;
        font-size: 1.25rem;
        border-bottom: 1px solid #d5d5d5;
        padding: 0 15px;
        svg { 
            margin-right: 5px;
            font-size: 1.5rem;
            vertical-align: middle;
            position: relative; top: -2px;
        }
    }
    a:hover, a.on {
        background: #d2d2d2;
        font-weight: bold;
    }
    
    
`

const Side = () => {
    const { t } = useTranslation()
    return (
        <SideBox>
            <NavLink to="/config" className={classNames('menu')}>
                <MdSettingsApplications /> 
                {t('menu_config')}
            </NavLink>
            <NavLink to="/member" className={classNames('menu')}>
                <MdOutlineManageAccounts />
                {t('menu_member')}
            </NavLink>
        </SideBox>
    )
}

export default Side