import { useTranslation } from 'react-i18next'
import { OuterBox, InnerBox } from '../common/LayoutBox'
import Title from '../common/Title'
const FindIdForm = () => {
    const { t } = useTranslation()
    return (
        <>
            <OuterBox className="layout_width content_box">
                <InnerBox>
                    <Title align="center">{t('findId')}</Title>
                </InnerBox>
            </OuterBox>
        </>
    )
}

export default FindIdForm