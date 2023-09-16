import styled, { css } from 'styled-components';

const Box = styled.h1`
  line-height: 1;
  font-size: 1.5rem;
  padding: 10px 0;
  ${(props) =>
    props.align &&
    css`
      text-align: ${props.align};
    `};
`;

const Title = ({ children, align }) => {
  return <Box align={align}>{children}</Box>;
};

export default Title;
