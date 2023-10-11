import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import ConfigForm from "../../../components/admin/configs/ConfigForm"

const IndexContainer = ({isLogin, config}) => {
    if (!isLogin) {
        return <Navigate to="/login" replace={true} />
    }
       
    return <ConfigForm config={config} />
}

export default connect(
    (state:any) => ({ isLogin : state.user.isLogin, config: state.config }),
    {}
)(IndexContainer)