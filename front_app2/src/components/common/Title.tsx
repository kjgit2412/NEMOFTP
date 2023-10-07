import styled, { css } from 'styled-components';
import fontSizes from '../../styles/fontSizes';

type StyleProps = {
  align?: string
  size?: string
  underline?: boolean
}

const Title = styled.h1<StyleProps>`
  line-height: 1;
  font-size: ${(props) => props.size? fontSizes[props.size] : '1.5rem'};
  padding: 10px 0;
  ${(props) =>
    props.align &&
    css`
      text-align: ${props.align};
    `}
  ${(props) => props.underline && css`
      border-bottom: 1px solid #212121;
  `}
`;


export default Title
