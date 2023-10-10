import styled, {css} from 'styled-components';

type StyleProps = {
  minheight?:number,
  width?:number
}
export const OuterBox = styled.div<StyleProps>`
  display: flex;
  align-items: center;
  ${props => props.minheight  && css`
    min-height: ${props.minheight}px;
  `}
  input {
    width: 100%;
    display: block;
    border: 1px solid #d5d5d5;
    height: 45px;
    border-radius: 3px;
    margin-bottom: 5px;
    font-size: 1.15rem;
    padding: 0 10px;
  }
  input:focus, textarea:focus {
    border: 1px solid #36466d;
  }
  textarea {
    width: 100%;
    display: block;
    border: 1px solid #d5d5d5;
    min-height: 150px;
    border-radius: 3px;
    resize: none;
    padding: 10px;
  }
`;

export const InnerBox = styled.div<StyleProps>`
width: ${props => props.width || 350}px;
margin: 10px auto 0 auto;
  input {
    text-align: center;
  }
`;