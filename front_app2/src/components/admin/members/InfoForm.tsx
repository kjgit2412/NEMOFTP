import Title from '../../../components/common/Title'
import { useTranslation } from 'react-i18next'
import { TableCols } from '../../common/TableStyle'
import { FiCheckSquare, FiSquare } from 'react-icons/fi'
import StyledButton1 from '../../common/StyledButton1'
const InfoForm = ({ userInfo }) => {
    const { t } = useTranslation()
    return (
        <>
            <Title bottomline="true">{t('회원정보수정')}</Title>
            <form method="post" autoComplete='off'>
            <TableCols>
                <tbody>
                    <tr>
                        <th>{t('이메일')}</th>
                        <td>{userInfo.email}</td>
                    </tr>
                    <tr>
                        <th>{t('회원명')}</th>
                        <td>
                            <input type='text' name='name' value={userInfo.name} />
                        </td>
                    </tr>
                    <tr>
                        <th>{t('휴대전화번호')}</th>
                        <td>
                            <input type='text' name='cellPhone' value={userInfo.cellPhone} />
                        </td>
                    </tr>
                    <tr>
                        <th>{t('회사명')}</th>
                        <td>
                            <input type='text' name='companyName' value={userInfo.companyName} />
                        </td>
                    </tr>
                    <tr>
                        <th>{t('부서명')}</th>
                        <td>
                            <input type='text' name='department' value={userInfo.department} />
                        </td>
                    </tr>
                    <tr>
                        <th>{t('주소')}</th>
                        <td>
                            <div className='mb5'>
                                <input type='text' name='zipcode' readOnly placeholder={t('우편번호')} value={userInfo.zipcode} />
                            </div>
                            <input type='text' name='address' readOnly placeholder={t('주소')} value={userInfo.address} />
                            <input type='text' name='addressSub' placeholder={t('나머지 주소')} value={userInfo.addressSub} />
                        </td>
                    </tr>
                    <tr>
                        <th>{t('계정설정')}</th>
                        <td>
                            <span>
                                {userInfo.expired ? <FiCheckSquare /> : <FiSquare />} 계정만료
                            </span>
                            <span>
                                {userInfo.locked ? <FiCheckSquare /> : <FiSquare />} 계정잠금
                            </span>
                            <span>
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