import styled, {css} from 'styled-components';

export const OuterBox = styled.div`
  display: flex;
  align-items: center;
  ${props => props.minHeight && css`
    min-height: ${props.minHeight}px;
  `}
`;

export const InnerBox = styled.div`
width: ${props => props.width || 350}px;
margin: 10px auto 0 auto;
input {
  width: 100%;
  display: block;
  border: 1px solid #d5d5d5;
  height: 45px;
  border-radius: 3px;
  margin-bottom: 5px;
  text-align: center;
  font-size: 1.15rem;
}
input:focus {
  border: 1px solid #36466d;
}
`;