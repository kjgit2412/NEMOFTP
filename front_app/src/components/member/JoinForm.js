import { useState, useCallback } from 'react';
import Title from '../common/Title';
import StyledButton1 from '../common/StyledButton1';
import ErrorMessage from '../common/ErrorMessage';
import {OuterBox, InnerBox} from '../common/LayoutBox'
import { emailValidator, mobileValidator } from '../../lib/validators';

const initialForm = {
    email : '',
    password: '',
    confirmPassword: '',
    name: '',
    cellPhone: ''
};

const validationFields = {
    email : "이메일을 입력하세요",
    password : "비밀번호를 입력하세요.",
    confirmPassword : "비밀번호를 확인하세요.",
    name : "회원명을 입력하세요."
};

const JoinForm = () => {
    const [ message, setMessage ] = useState('');
    const [ form, setForm ] = useState(initialForm);

    const handleChange = useCallback((e) => {
        setForm({...form, [e.target.name] : e.target.value.trim()});
    }, [form, setForm]);

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
                    throw new Error(validationFields[key]);
                }

                if (key === 'email' && !emailValidator(form[key])) {
                    e.target[key].focus();
                    throw new Error("이메일 형식이 아닙니다.");
                }
            }
            
            /* 비밀번호, 비밀번호 확인 처리 */
            if (form.password !== form.confirmPassword) {
                e.target.confirmPassword.focus();
                throw new Error("비밀번호가 일치하지 않습니다.");
            }

            /* 휴대전화번호 형식 체크 */
            if (form.cellPhone && !mobileValidator(form.cellPhone)) {
                e.target.cellPhone.focus();
                throw new Error("휴대전화번호 형식이 아닙니다.");
            } 
            
            setMessage("");
       } catch (err) {
            setMessage(err.message);  
       }
       /* 유효성 검사 E */
    }, [form]);

    return (
        <>
        <OuterBox className='layout_width' minheight="700">
            <InnerBox width={350}>
                <Title align="center">회원가입</Title>
                <form autoComplete='off' onSubmit={handleSubmit}>
                    <input type="text" name="email" placeholder="이메일" onChange={handleChange} />
                    <input type="password" name="password" placeholder="비밀번호" onChange={handleChange} />
                    <input type="password" name="confirmPassword" placeholder="비밀번호 확인" onChange={handleChange} />
                    <input type="text" name="name" placeholder="회원이름" onChange={handleChange} />
                    <input type="text" name="cellPhone" placeholder="휴대전화번호" onChange={handleChange} />
                    {message && <ErrorMessage>{message}</ErrorMessage>}
            
                    <StyledButton1 type="submit">가입하기</StyledButton1>
                    
                </form>
            </InnerBox>
        </OuterBox>        
        </>
    )
};

export default JoinForm;