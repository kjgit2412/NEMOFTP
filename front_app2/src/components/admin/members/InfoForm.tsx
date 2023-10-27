import Title from '../../../components/common/Title'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { TableCols } from '../../common/TableStyle'
import { FiCheckSquare, FiSquare } from 'react-icons/fi'
import StyledButton1 from '../../common/StyledButton1'
const InfoForm = ({ userInfo }) => {
    const { t } = useTranslation()
    const handleSubmit = useCallback((e) => {

    }, [])
    const handleChange = useCallback((e) => {


    }, [])
    return (
        <>
            <Title bottomline="true">{t('회원정보수정')}</Title>
            <form method="post" autoComplete='off' onSubmit={handleSubmit}>
            <TableCols>
                <tbody>
                    <tr>
                        <th>{t('이메일')}</th>
                        <td>{userInfo.email}</td>
                    </tr>
                    <tr>
                        <th>{t('회원명')}</th>
                        <td>
                            <input type='text' name='name' value={userInfo.name || ''} onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <th>{t('휴대전화번호')}</th>
                        <td>
                            <input type='text' name='cellPhone' value={userInfo.cellPhone || ''} onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <th>{t('회사명')}</th>
                        <td>
                            <input type='text' name='companyName' value={userInfo.companyName || ''} onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <th>{t('부서명')}</th>
                        <td>
                            <input type='text' name='department' value={userInfo.department || ''} onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <th>{t('주소')}</th>
                        <td>
                            <div className='mb5'>
                                <input type='text' name='zipcode' readOnly placeholder={t('우편번호')} value={userInfo.zipcode || ''} onChange={handleChange} />
                            </div>
                            <input type='text' name='address' readOnly placeholder={t('주소')} value={userInfo.address || ''} onChange={handleChange} />
                            <input type='text' name='addressSub' placeholder={t('나머지 주소')} value={userInfo.addressSub || ''} onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <th>{t('계정설정')}</th>
                        <td>
                            <span className='mr10'>
                                {userInfo.expired ? <FiCheckSquare /> : <FiSquare />} 계정만료
                            </span>
                            <span className='mr10'>
                                {userInfo.locked ? <FiCheckSquare /> : <FiSquare />} 계정잠금
                            </span>
                            <span className="mr10">
                                {userInfo.credentialExpired ? <FiCheckSquare /> : <FiSquare />} 비밀번호 만료 
                            </span>
                            <span>
                                {userInfo.enabled ? <FiCheckSquare /> : <FiSquare /> } 회원탈퇴
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <th>{t('권한설정')}</th>
                        <td></td>
                    </tr>
                </tbody>
            </TableCols>
            <StyledButton1 type='submit' width="300px">{t('변경하기')}</StyledButton1>
            </form>
        </>
    )
}

export default InfoForm