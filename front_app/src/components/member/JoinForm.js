import Title from '../common/Title';
import StyledButton1 from '../common/StyledButton1';
import ErrorMessage from '../common/ErrorMessage';
import {OuterBox, InnerBox} from '../common/LayoutBox'

const JoinForm = () => {
    

    return (
        <>
        <OuterBox className='layout_width'>
            <InnerBox width={700}>
                <Title align="center">회원가입</Title>
                
                <StyledButton1 width={200}>가입하기</StyledButton1>
            </InnerBox>
        </OuterBox>        
        </>
    )
};

export default JoinForm;