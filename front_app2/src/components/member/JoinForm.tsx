import { useState, useCallback, useEffect, useMemo } from 'react'
import Title from '../common/Title'
import StyledButton1 from '../common/StyledButton1'
import ErrorMessage from '../common/ErrorMessage'
import {OuterBox, InnerBox} from '../common/LayoutBox'
import { emailValidator, mobileValidator, passwordAlphaCheck, passwordNumberCheck, passwordSpecialCharCheck } from '../../lib/validators'
import { checkUserExists } from '../../api/member/join'
import { useTranslation } from 'react-i18next'


const initialForm = {
    email : '',
    password: '',
    confirmPassword: '',
    name: '',
    cellPhone: ''
}

const validationFields = {
    email : "" as string,
    password : "" as string,
    confirmPassword : "" as string,
    name : "" as string
}

const JoinForm = () => {
    
    const { t } = useTranslation()

    useEffect(() => {
        validationFields.email = t('required_email')
        validationFields.password = t('required_password')
        validationFields.confirmPassword = t('required_confirmPassword')
        validationFields.name = t('required_name')
    }, [t]);

    const [ message, setMessage ] = useState('')
    const [ form, setForm ] = useState(initialForm)

    const handleChange = useCallback((e) => {
        setForm({...form, [e.target.name] : e.target.value.trim()})
    }, [form, setForm])

    /**
     * 가입 처리 
     * 
     */
    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        /* 유효성 검사 S */
       try {
            for (const key in validationFields) {
                if (!form[key]) {
                    e.target[key].focus();
                    throw new Error(validationFields[key])
                }

                if (key === 'email' && !emailValidator(form[key])) {
                    e.target[key].focus();
                    throw new Error(t('format_email'));
                }
            }

            const password = form.password;
            /* 비밀번호 자리수 및 복잡성 체크 */
            if (password.length < 8 || !passwordAlphaCheck(password) || !passwordNumberCheck(password) || !passwordSpecialCharCheck(password)) {
                if (e.target.password)
                e.target.password.focus();
                throw new Error(t('format_password'))
            }

            /* 비밀번호, 비밀번호 확인 처리 */
            if (password !== form.confirmPassword) {
                e.target.confirmPassword.focus();
                throw new Error(t('mismatch_password'))
            }

            /* 휴대전화번호 형식 체크 */
            if (form.cellPhone && !mobileValidator(form.cellPhone)) {
                e.target.cellPhone.focus();
                throw new Error(t('format_cellPhone'))
            } 
            
           
            (async() => {
                try {
                     /* 아이디 중복 여부 체크 */
                    const res = await checkUserExists(form.email);
                    console.log(res)
                    
                } catch (err) {
                    console.log(err)
                }
            })();

            setMessage("")
       } catch (err: any) {
            setMessage(err.message)
       }
       /* 유효성 검사 E */



    }, [form, t])

    return (
        <>
        <OuterBox className='layout_width' minheight={700}>
            <InnerBox width={350}>
                <Title align="center">{t('join_title')}</Title>
                <form autoComplete='off' onSubmit={handleSubmit}>
                    <input type="text" name="email" placeholder={t('email')} onChange={handleChange} />
                    <input type="password" name="password" placeholder={t('password')} onChange={handleChange} />
                    <input type="password" name="confirmPassword" placeholder={t('confirmPassword')} onChange={handleChange} />
                    <input type="text" name="name" placeholder={t('name')} onChange={handleChange} />
                    <input type="text" name="cellPhone" placeholder={t('cellPhone')} onChange={handleChange} />
                    {message && <ErrorMessage>{message}</ErrorMessage>}
            
                    <StyledButton1 type="submit">{t('join')}</StyledButton1>
                    
                </form>
            </InnerBox>
        </OuterBox>        
        </>
    )
}

export default JoinForm