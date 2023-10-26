import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import LoginContainer from '../../LoginContainer'
import InfoForm from '../../../components/admin/members/InfoForm'
import { OuterBox } from '../../../components/common/LayoutBox'
import { getUser } from '../../../api/admin/user'
import Loading from '../../../components/common/Loading'
const InfoContainer = ({isLogin}) => {
    const [ userInfo, setUserInfo ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    const { seq } = useParams()
    useEffect(() => {
       getUser(Number(seq))
        .then((user: any) => {
            setUserInfo(user)
            setLoading(false)
        })
        .catch(err => console.error(err))
    }, []);


    if (!isLogin) {
        return <LoginContainer />
    }

    return (
        <OuterBox className="content_box">
            {loading ? <Loading /> : <InfoForm userInfo={userInfo} />}
        </OuterBox>
    )
}

export default connect(
    (state: any) => ({ isLogin : state.user.isLogin })
)(InfoContainer)