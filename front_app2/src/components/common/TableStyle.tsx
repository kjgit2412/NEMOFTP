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
    width? : number
}

export const TableRows = styled.table<TableRowsProps>`
    width: 100%;
    thead {
        th {
            background: #f8f8f8;
            font-weight: normal;
            padding: 10px 0;
            border: 1px solid #d5d5d5;
            border-left: 0; 
            border-right: 0;
            svg {
                font-size: 1.5rem;
                vertical-align: middle;
                cursor: pointer;
            }
        }
    }   
    tbody {
        td {
            border-bottom: 1px solid #d5d5d5;
            text-align: center;
            padding: 10px 0;
            svg {
                font-size: 1.5rem;
                vertical-align: middle;
                cursor: pointer;
            }
        }
    }
    .w250 { 
        width: 200px;
    }
    .w40 {
        width: 40px;
    }
`