import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import FindIdForm from '../components/member/FindIdForm'

const FindIdContainer = ({isLogin}) => {
    if (isLogin) {
        return <Navigate to="/" replace={true} />
    }


    return <FindIdForm />
}

export default connect(
    (state:any) => ({ isLogin : state.user.isLogin}),
    {}
)(FindIdContainer)