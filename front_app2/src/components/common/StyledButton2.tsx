import { Link } from 'react-router-dom'
import styled from 'styled-components'


const StyledButton2 = styled(Link)`
    background: #6871c6;
    transition: all 0.5s;
    color: #f8f8f8;
    line-height: 1;
    padding: 2px 10px 4px 10px;
    border-radius: 5px;
    border: 1px solid #3c4276;
    font-size: 0.95rem;
    &:hover {
        background: #3c4276;
        color: #fff;
    }
`

export default StyledButton2