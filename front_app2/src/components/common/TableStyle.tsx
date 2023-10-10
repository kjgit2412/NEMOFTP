import { TableHTMLAttributes } from 'react';
import styled from 'styled-components'

type TableColsProps = TableHTMLAttributes<any> & {

}


export const TableCols = styled.table<TableColsProps>`
    width: 100%;
    border-top: 1px solid #d5d5d5;
    th {
        width: 150px;
        background: #f8f8f8;
        font-weight: normal;
        border-right: 1px solid #d5d5d5;
    }
    td { 
        padding: 10px;
    }
    th, td { 
        border-bottom: 1px solid #d5d5d5;
    }
`;

type TableRowsProps = TableHTMLAttributes<any> & {

}

export const TableRows = styled.table<TableRowsProps>`
    
`