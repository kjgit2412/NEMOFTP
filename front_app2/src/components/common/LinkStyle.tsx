import styled from 'styled-components'
export const Links = styled.div`
    display: flex;
    padding: 10px;
    background: #fff;
    border-bottom: 1px solid #d5d5d5;
    a {
      flex-grow: 1; 
      width: 0;
      text-align: center;
      svg { 
        vertical-align: middle;
        position: relative; 
        top: -2px;
        margin-right: 3px;
      }
      &:hover {
        text-decoration: underline;
      }
    }
`;