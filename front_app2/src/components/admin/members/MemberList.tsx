import { FiCheckSquare, FiSquare } from 'react-icons/fi'
import { useTranslation } from "react-i18next"
import Title from "../../common/Title"
import { TableRows } from "../../common/TableStyle"

const MemberList = () => {
    const { t } = useTranslation()
    return (
        <>
            <Title bottomline="true">{t('회원 목록')}</Title>
            <TableRows>
                <thead>
                    <tr>
                        <th className="w40">
                            <FiSquare />
                        </th>
                        <th>{t('회원번호')}</th>
                        <th>{t('이메일')}</th>
                        <th>{t('회원명')}</th>
                        <th>{t('휴대전화번호')}</th>
                        <th>{t('계정만료')}</th>
                        <th>{t('계정잠금')}</th>
                        <th>{t('비밀번호만료')}</th>
                        <th>{t('탈퇴')}</th>
                        <th className="w250"></th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </TableRows>
        </>
    )
}

export default MemberList