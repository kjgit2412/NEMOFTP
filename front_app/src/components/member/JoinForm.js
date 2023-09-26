import { useState, useCallback } from 'react';
import Title from '../common/Title';
import StyledButton1 from '../common/StyledButton1';
import ErrorMessage from '../common/ErrorMessage';
import {OuterBox, InnerBox} from '../common/LayoutBox'

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
        setForm({...form, [e.target.name] : e.target.value});
    }, [form, setForm]);

    /**
     * 가입 처리 
     * 
     */
    const handleSubmit = useCallback((e) => {
        e.preventDefault();
       try {
            for (const key in validationFields) {
                if (!form[key] || !form[key].trim()) {
                    setMessage(validationFields[key]);
                    e.target[key].focus();
                    break;
                }
            }
       } catch (err) {
            setMessage(err.message);  
       }
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