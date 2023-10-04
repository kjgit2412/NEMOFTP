import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

type ButtonProps = ButtonHTMLAttributes<any> & {
  children?:any
  onClick?: Function
  className?: string
  type?: string
}

const StyledButton1 = styled.button<ButtonProps>`
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

export default StyledButton1;
