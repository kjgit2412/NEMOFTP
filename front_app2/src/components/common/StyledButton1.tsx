import { ButtonHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

type ButtonProps = ButtonHTMLAttributes<any> & {
  children?:any
  onClick?: Function
  className?: string
  type?: string
  color?: string
  fcolor?: string
  width?: string
  height?: string
  bordercolor?: string
}

const StyledButton1 = styled.button<ButtonProps>`
  line-height: 1;
  background: ${props => props.color || '#36466d'};
  display: block;
  height: ${props => props.height || '45px'};
  width: ${props => props.width || '100%'};
  color: ${props => props.fcolor || '#fff'};
  font-size: 1.5rem;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s ease-in;
  
  ${props => props.bordercolor && css`
      border: 1px solid ${props.bordercolor};
  `}


  * {
    color: #fff;
    font-size: 1.5rem;
    vertical-align: middle;
  }
`;

export default StyledButton1;

type ButtonGroupProps = {
  width?: string
}

export const ButtonGroup = styled.div<ButtonGroupProps>`
  display: flex;
  width: ${props => props.width || '100%'};
  margin: 20px auto;
  * { 
    flex-grow: 1;
  }
  *+* { 
    margin-left: 5px; 
  }

`