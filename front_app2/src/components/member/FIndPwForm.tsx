import { useForm, SubmitHandler } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { OuterBox, InnerBox } from '../common/LayoutBox'
import Title from '../common/Title'
import ErrorMessage from '../common/ErrorMessage'
import StyledButton1 from '../common/StyledButton1'
import LinksTab from './LinksTab'
import { useTransition } from 'react'

type Inputs = {
    email: String,
    name: String
}
const FindPwForm = () => {

    const { t } = useTranslation()

    const { register, handleSubmit, formState : { errors}} = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
    }


    return (
        <>
            <OuterBox className="layout_width content_box">
                <InnerBox>
                    <Title align="center">{t('findPw')}</Title>
                    <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("email",  {required: true})} placeholder={t('email')} />
                        {errors.email && <ErrorMessage>{t('required_email')}</ErrorMessage>}
                        <input {...register("name", { required: true})} placeholder={t('name')} />
                        {errors.name && <ErrorMessage>{t('required_name')}</ErrorMessage>}
                        <StyledButton1>{t('findPw')}</StyledButton1>
                    </form>
                    <LinksTab />
                </InnerBox>
            </OuterBox>
        </>
    )
}

export default FindPwForm