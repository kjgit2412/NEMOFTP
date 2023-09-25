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

const JoinForm = () => {
    const { message, setMessage } = useState('');
    const { form, setForm } = useState(initialForm);

    const handleChange = useCallback((e) => {
        setForm({...form, [e.target.name] : e.target.value});
    }, [form, setForm]);

    return (
        <>
        <OuterBox className='layout_width' minHeight="700">
            <InnerBox width={350}>
                <Title align="center">회원가입</Title>
                <input type="text" name="email" placeholder="이메일" onChange={handleChange} />
                <input type="password" name="password" placeholder="비밀번호" onChange={handleChange} />
                <input type="password" name="confirmPassword" placeholder="비밀번호 확인" onChange={handleChange} />
                <input type="text" name="name" placeholder="회원이름" onChange={handleChange} />
                {message && <ErrorMessage>{message}</ErrorMessage>}
                <div className='ac'>
                    <StyledButton1>가입하기</StyledButton1>
                </div>
            </InnerBox>
        </OuterBox>        
        </>
    )
};

export default JoinForm;