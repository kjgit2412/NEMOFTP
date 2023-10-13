/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { FiCheckSquare, FiSquare } from 'react-icons/fi'
import { useTranslation } from "react-i18next"
import Title from "../../common/Title"
import { TableRows } from "../../common/TableStyle"
import { getUsers, initalUserSearchForm } from '../../../api/admin/user'
import ErrorMessage from '../../common/ErrorMessage'
import Pagination from '../../common/Pagination'

const MemberList = () => {
    const { t } = useTranslation()
    const [ form, setForm ] = useState(initalUserSearchForm)
    const [ listData, setListData ] = useState({
        content: [],
        pagination: {} 
    })
    const [ message, setMessage ] = useState('')
    useEffect(() => {
        getUsers(form)
        .then((data: any) => {
            setListData({...data})
            if (!listData.content || listData.content.length === 0) {
                setMessage(t('조회된 데이터가 없습니다.'))
            } else {
                setMessage("")
            }
        })
        .catch(err => {
            console.log(err)
            setMessage(err.message)
        }) 
    }, [form, message])

    const rows = listData.content.map((u: any) => <MemberRow key={u.seq} user={u} />)
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
                        <th>{t('업체명')}</th>
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
                { message && <tr><td colSpan={11}><ErrorMessage>{message}</ErrorMessage></td></tr>}
                { rows }
                </tbody>
            </TableRows>
            { listData.pagination && <Pagination data={listData.pagination} />}
        </>
    )
}

const MemberRow = ({user}) => {
    return (
        <tr>
            <td><FiSquare /></td>
            <td>{user.seq}</td>
            <td>{user.email}</td>
            <td>{user.companyName}</td>
            <td>{user.name}</td>
            <td>{user.cellPhone}</td>
            <td>{user.expired ? 'Y' : 'N' }</td>
            <td>{user.locked ? 'Y' : 'N'}</td>
            <td>{user.credentialExpired ? 'Y' : 'N'}</td>
            <td>{user.enabled ? 'Y' : 'N'}</td>
            <td>

            </td>
        </tr>
    )
}

export default MemberList