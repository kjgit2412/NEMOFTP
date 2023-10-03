import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  line-height: 1;
  background: #36466d;
  display: block;
  height: 45px;
  width: 100%;
  color: #fff;
  font-size: 1.5rem;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s ease-in;
  &:hover {
    background: #212121;
  }
  * {
    color: #fff;
    font-size: 1.5rem;
    vertical-align: middle;
  }
`;

type ButtonProps = ButtonHTMLAttributes<any> & {
  children?:any
  onClick?: Function
  className?: string
  type?: string
}

const StyledButton1 = ({ children, onClick, className, type }: ButtonProps) : JSX.Element => {
  return (
    <Button type={type || 'button'} onClick={onClick} className={className}>
      {children}
    </Button>
  );
};

export default StyledButton1;
