import { FiLoader } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
const LoadingBox = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background: rgba(0,0,0, 0.7);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    svg { 
        font-size: 3rem;
    }
    div {
        font-size: 1.5rem;
        color: #fff;
        margin-top: 10px;
    }
`
const Loading = () => {
    const { t } = useTranslation()
    return (
        <LoadingBox>
            <FiLoader />
            <div>{t('로딩중 입니다. 잠시만 기다려 주세요...')}</div>
        </LoadingBox>
    )
}

export default Loading