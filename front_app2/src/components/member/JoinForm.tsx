/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect    } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiSquare, FiCheckSquare } from 'react-icons/fi'
import Title from '../common/Title'
import { TermsBox, TermsAgree } from '../common/TermsStyle'
import StyledButton1 from '../common/StyledButton1'
import ErrorMessage from '../common/ErrorMessage'
import {OuterBox, InnerBox} from '../common/LayoutBox'
import { emailValidator, mobileValidator, passwordAlphaCheck, passwordNumberCheck, passwordSpecialCharCheck } from '../../lib/validators'
import { checkUserExists, registerUser } from '../../api/member/join'
import { useTranslation } from 'react-i18next'
import { JoinFormType } from '../../modules/userTypes'

const initialForm : JoinFormType = {
    email : '',
    password: '',
    confirmPassword: '',
    name: '',
    cellPhone: '',
    agree: false,
}

const validationFields = {
    email : "" as string,
    password : "" as string,
    confirmPassword : "" as string,
    name : "" as string
}

const JoinForm = ({joinTerms}) => {
    
    const { t } = useTranslation()
    const navigate = useNavigate()

    useEffect(() => {
        validationFields.email = t('required_email')
        validationFields.password = t('required_password')
        validationFields.confirmPassword = t('required_confirmPassword')
        validationFields.name = t('required_name')
    }, [t]);

    const [ message, setMessage ] = useState('')
    const [ form, setForm ] = useState(initialForm)
    const [ processing, setProcessing] = useState(false)

    const handleChange = useCallback((e) => {
        setForm({...form, [e.target.name] : e.target.value.trim()})
    }, [form])

    const toggleAgree = useCallback(() => {
        setForm({...form, agree: !form.agree})
    }, [form])

    /**
     * 가입 처리 
     * 
     */
    const handleSubmit = useCallback((e) => {
        e.preventDefault()
        /* 유효성 검사 S */
       try {
            for (const key in validationFields) {
                if (!form[key]) {
                    e.target[key].focus()
                    throw new Error(validationFields[key])
                }

                if (key === 'email' && !emailValidator(form[key])) {
                    e.target[key].focus()
                    throw new Error(t('format_email'));
                }
            }



            const password = form.password;
            /* 비밀번호 자리수 및 복잡성 체크 */
            if (password.length < 8 || !passwordAlphaCheck(password) || !passwordNumberCheck(password) || !passwordSpecialCharCheck(password)) {
                if (e.target.password)
                e.target.password.focus()
                throw new Error(t('format_password'))
            }

            /* 비밀번호, 비밀번호 확인 처리 */
            if (password !== form.confirmPassword) {
                e.target.confirmPassword.focus()
                throw new Error(t('mismatch_password'))
            }

            /* 휴대전화번호 형식 체크 */
            if (form.cellPhone && !mobileValidator(form.cellPhone)) {
                e.target.cellPhone.focus()
                throw new Error(t('format_cellPhone'))
            } 
            
            /* 회원가입약관 동의 여부 체크 */
            if (!form.agree) {
                throw new Error(t('assertTrue_join_agree'))
            }
            
            (async() => {
                try {
                     /* 아이디 중복 여부 체크 */
                    await checkUserExists(form.email)
                    setMessage(t("duplicated_email"))
                } catch (err) {
                    // 회원 가입 처리 
                    try {
                        setProcessing(true)
                        const res = await registerUser(form);
                        console.log(res);
                        setProcessing(false)
                        setMessage("")
                        setForm({...initialForm})

                        // 회원가입 성공시 로그인 페이지로 이동
                        navigate("/login", {replace: true})


                    } catch (err:any) {
                        setMessage(err.message)        
                        setProcessing(false)
                    }
                }
            })();

            setMessage("")
            setProcessing(false)
       } catch (err: any) {
            setMessage(err.message)
       }
       /* 유효성 검사 E */

    }, [form, t, navigate, processing])

    return (
        <>
        <OuterBox className='layout_width content_box' minheight={700}>
            <InnerBox width={350}>
                <Title align="center">{t('join_title')}</Title>
                <form autoComplete='off' onSubmit={handleSubmit}>
                    <input type="text" name="email" placeholder={t('email')} onChange={handleChange} />
                    <input type="password" name="password" placeholder={t('password')} onChange={handleChange} />
                    <input type="password" name="confirmPassword" placeholder={t('confirmPassword')} onChange={handleChange} />
                    <input type="text" name="name" placeholder={t('name')} onChange={handleChange} />
                    <input type="text" name="cellPhone" placeholder={t('cellPhone')} onChange={handleChange} />
                    {message && <ErrorMessage>{message}</ErrorMessage>}

                    <Title size='normal' bottomline="true" align='center'>{t('join_terms')}</Title>
                    <TermsBox>{joinTerms}</TermsBox>
                    <TermsAgree onClick={toggleAgree}>
                        {form.agree ? <FiCheckSquare /> : <FiSquare />}{t('join_agree_terms')}
                    </TermsAgree>

                    <StyledButton1 type="submit" disabled={processing}>{t('join')}</StyledButton1>
                    
                </form>
            </InnerBox>
        </OuterBox>        
        </>
    )
}

export default React.memo(JoinForm)