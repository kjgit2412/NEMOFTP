import styled from 'styled-components';
const Box = styled.div`
  color: ${(props) => props.color || 'red'};
  box-shadow: 2px 2px 5px #36466d;
  padding: 4px 10px;
  border-radius: 3px;
  margin: 5px 0;
  font-size: 0.9rem;
  background: #fff;
  font-weight: bold;
  text-align: center;
`;

type ErrorMessageProps = {
  children?: any,
  color?: string
}

const ErrorMessage = ({ children, color }: ErrorMessageProps) => {
  return <Box color={color}>{children}</Box>;
};

export default ErrorMessage;
