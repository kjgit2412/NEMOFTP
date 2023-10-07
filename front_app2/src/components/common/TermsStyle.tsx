import styled from 'styled-components'
import fontSizes from '../../styles/fontSizes';

export const TermsAgree = styled.div`
    margin-bottom: 20px;
    text-align: center;
    font-size: ${fontSizes.normal};
    cursor: pointer;
    svg {
        vertical-align: middle;
        font-size: 1.5rem;
        position: relative;
        top: -1px;
        margin-right: 3px;
    }
`
export const TermsBox = styled.div`
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #d5d5d5; 
    border-radius: 3px;
    height: 120px;
    overflow-y: auto;
    font-size: ${fontSizes.small}
`

