import styled, {css} from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FiChevronsLeft, FiChevronsRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
const OuterBox = styled.div`
    text-align: center;
    margin: 20px 0;
`

const StyledLink = styled(NavLink)`
    border: 1px solid #d5d5d5;
    padding: 5px 10px;  
    display: inline-block;
    &+& { 
        margin-left: 5px; 
    }
   ${(props: any) => props.isActive && css`
        background: #000;
        color: #fff;
   `}
`

const Pagination = ({data, url}) => {
    const firstPageLink = data.prevFirstPage > 0 ? <StyledLink key="firstPage" to={url + data.baseUrl + '1'}><FiChevronsLeft /></StyledLink>: ""
    const lastPageLink = data.nextFirstPage > 0 ? <StyledLink key="lastPage" to={url + data.baseUrl + data.totalPages}><FiChevronsRight /></StyledLink>: ""
    const prevLink = data.prevFirstPage > 0 ?  <StyledLink key="prevFirstPage" to={url + data.baseUrl + data.prevFirstPage}><FiChevronLeft /></StyledLink> : ""
    const nextLink = data.nextFirstPage > 0 ?  <StyledLink key="nextFirstPage" to={url + data.baseUrl + data.nextFirstPage}><FiChevronRight /></StyledLink> : ""
    const links = data.pages?.map(x => (<StyledLink key={x[0]} to={url + x[1]}>{x[0]}</StyledLink>))
    return (
        <OuterBox>
            {firstPageLink}
            {prevLink}
            {links}
            {nextLink}
            {lastPageLink}
        </OuterBox>
    )
}

export default Pagination