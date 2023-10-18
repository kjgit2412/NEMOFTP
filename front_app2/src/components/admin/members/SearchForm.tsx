import { TableCols } from "../../common/TableStyle"
import StyledButton1 from "../../common/StyledButton1"
import { useTranslation } from "react-i18next"
const SearchForm = ({form, setForm}) : JSX.Element => {
    const { t } = useTranslation()

    const onChange = (e) => {
        form[e.target.name] = e.target.value  
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setForm({...form})
    }

    return (
        <form onSubmit={onSubmit} autoComplete="off">
            <TableCols>
                <tbody>
                <tr>
                    <th>{t('회원명')}</th>
                    <td>
                        <input type="text" name="name" onChange={onChange} />
                    </td>
                    <th>{t('이메일')}</th>
                    <td>
                        <input type="text" name="email" onChange={onChange} />
                    </td>
                    <th>{t('휴대전화번호')}</th>
                    <td>
                        <input type="text" name="cellPhone" onChange={onChange} />
                    </td>
                </tr>
                <tr>
                    <th>${t('키워드 검색')}</th>
                    <td colSpan={5}>

                    </td>
                </tr>
                </tbody>
            </TableCols>
            <StyledButton1 type='submit' width='300px' center="true">{t('조회하기')}</StyledButton1>
        </form>
    )
}

export default SearchForm