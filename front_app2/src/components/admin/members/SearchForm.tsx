import { TableCols } from "../../common/TableStyle"
import StyledButton1 from "../../common/StyledButton1"
import { useTranslation } from "react-i18next"
const SearchForm = ({form, setForm}) : JSX.Element => {
    const { t } = useTranslation()

    const onChange = (e) => {
        form[e.target.name] = e.target.value 
        setForm({...form})
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
                        <input type="text" name="name" onChange={onChange} value={form.name} />
                    </td>
                    <th>{t('이메일')}</th>
                    <td>
                        <input type="text" name="email" onChange={onChange} value={form.email} />
                    </td>
                </tr>
                <tr>
                    <th>{t('키워드 검색')}</th>
                    <td className='grouping'>
                        <select name="sopt" onChange={onChange}>
                            <option value="all">{t('통합검색')}</option>
                            <option value="name">{t('회원명')}</option>
                            <option value="email">{t('이메일')}</option>
                            <option value="cellPhone">{t('휴대전화번호')}</option>
                            <option value="company_name">{t('회사명')}</option>
                            <option value="department">{t('부서명')}</option>
                        </select>
                        <input type="text" name="skey" onChange={onChange} value={form.skey} />
                    </td>
                    <th>{t('휴대전화번호')}</th>
                    <td>
                        <input type="text" name="cellPhone" onChange={onChange} value={form.cellPhone} />
                    </td>
                </tr>
                </tbody>
            </TableCols>
            <StyledButton1 className="mt20" type='submit' width='300px' center="true">{t('조회하기')}</StyledButton1>
        </form>
    )
}

export default SearchForm