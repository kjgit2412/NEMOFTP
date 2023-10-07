import { useForm, SubmitHandler } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { OuterBox, InnerBox } from '../common/LayoutBox'
import Title from '../common/Title'
import ErrorMessage from '../common/ErrorMessage'
import StyledButton1 from '../common/StyledButton1'
type Inputs = {
    name: string
    cellPhone: string
}
const FindIdForm = () => {
    const { t } = useTranslation()

    const { register, handleSubmit, formState: { errors }} = useForm<Inputs>()

   const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data) 
   }

    return (
        <>
            <OuterBox className="layout_width content_box">
                <InnerBox>
                    <Title align="center">{t('findId')}</Title>
                    <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name",  {required: true})} placeholder={t('name')} />
                        {errors.name && <ErrorMessage>{t('required_name')}</ErrorMessage>}
                        <input {...register("cellPhone", { required: true})} placeholder={t('cellPhone')} />
                        {errors.cellPhone && <ErrorMessage>{t('required_cellPhone')}</ErrorMessage>}
                        <StyledButton1>{t('findId')}</StyledButton1>
                    </form>
                </InnerBox>
            </OuterBox>
        </>
    )
}

export default FindIdForm