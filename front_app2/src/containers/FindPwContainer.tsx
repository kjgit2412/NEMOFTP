import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import FindPwForm from '../components/member/FIndPwForm'

const FindPwContainer = ({isLogin}) => {
    if (isLogin) {
        return <Navigate to="/" replace={true} />
    }

    return <FindPwForm />
}

export default connect(
    (state:any) => ({ isLogin: state.user.isLogin}),
    {}
)(FindPwContainer)