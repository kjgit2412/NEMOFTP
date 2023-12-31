import styled, { css } from 'styled-components';
import fontSizes from '../../styles/fontSizes';

type StyleProps = {
  align?: string
  size?: string
  bottomline?: string
  margin?: string
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
  ${(props) => props.bottomline && css`
      border-bottom: 1px solid #212121;
      margin-bottom: 20px;
  `}

  ${(props) => props.margin && css`
    margin: ${props.margin};
  `}
`;


export default Title
