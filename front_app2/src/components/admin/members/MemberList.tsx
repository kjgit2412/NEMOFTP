/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FiCheckSquare, FiSquare } from 'react-icons/fi'
import { useTranslation } from "react-i18next"
import Title from "../../common/Title"
import { TableRows } from "../../common/TableStyle"
import { getUsers, initalUserSearchForm, ListDataType } from '../../../api/admin/user'
import ErrorMessage from '../../common/ErrorMessage'
import SearchForm from './SearchForm'
import loadable from '@loadable/component'
import { produce } from 'immer'

const MemberList = () => {
    const Pagination = loadable(() => import('../../common/Pagination'))
    const { t } = useTranslation()
    const [ searchParams ] = useSearchParams()
    const page = searchParams.get("page") || '1'

    initalUserSearchForm.page = parseInt(page)
    const [ form, setForm ] = useState(initalUserSearchForm)
    const [ listData, setListData ] = useState({
        content: [],
        pagination: {} 
    } as ListDataType)

    const [ message, setMessage ] = useState('')

    useEffect(() => {
        getUsers(form)
        .then((data: ListDataType) => {
            setListData(
                produce(draft => {
                    draft.content = data.content
                    draft.pagination = data.pagination
                })
            )
        })
        .catch(err => {
            console.log(err)
            setMessage(err.message)
        }) 
    }, [form])

    const rows = listData.content.map((u: any) => <MemberRow key={u.seq} user={u} />)
    return (
        <>
            <Title bottomline="true">{t('회원 검색')}</Title>
            <SearchForm form={form} setForm={setForm} />

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
                { rows && rows.length > 0 ? rows : (<tr><td colSpan={11}><ErrorMessage>{t('조회된 데이터가 없습니다.')}</ErrorMessage></td></tr>) }
                </tbody>
            </TableRows>
            { rows && rows.length > 0 && listData.pagination && <Pagination data={listData.pagination} url='/member' />}
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