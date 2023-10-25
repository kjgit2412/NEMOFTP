import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import LoginContainer from '../../LoginContainer'
import InfoForm from '../../../components/admin/members/InfoForm'
import { OuterBox } from '../../../components/common/LayoutBox'
import { getUser } from '../../../api/admin/user'

const InfoContainer = ({isLogin}) => {
    const [userInfo, setUserInfo ] = useState(null);
    const { seq } = useParams()
    useEffect(() => {
       getUser(Number(seq))
        .then((user: any) => setUserInfo(user))
        .catch(err => console.error(err))
    }, []);


    if (!isLogin) {
        return <LoginContainer />
    }

    return (
        <OuterBox className="content_box">
            <InfoForm />
        </OuterBox>
    )
}

export default connect(
    (state: any) => ({ isLogin : state.user.isLogin })
)(InfoContainer)