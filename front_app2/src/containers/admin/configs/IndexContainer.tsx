import { connect } from 'react-redux'
import loadable from '@loadable/component'
import ConfigForm from "../../../components/admin/configs/ConfigForm"

const IndexContainer = ({isLogin, config}) => {
    if (!isLogin) {
        const LoginContainer = loadable(() => import('../../LoginContainer'))
        return <LoginContainer />
    }
       
    return <ConfigForm config={config} />
}

export default connect(
    (state:any) => ({ isLogin : state.user.isLogin, config: state.config }),
    {}
)(IndexContainer)