import { connect } from 'react-redux'
import MemberList from "../../../components/admin/members/MemberList"
import { OuterBox  } from "../../../components/common/LayoutBox"
import loadable from '@loadable/component'

const IndexContainer = ({isLogin}) : JSX.Element => {
    if (!isLogin) {
        const LoginContainer = loadable(() => import('../../LoginContainer'))
        return <LoginContainer />
    }
    
    return ( 
        <OuterBox className="content_box">
            <MemberList />
        </OuterBox>
        
    )
}

export default connect(
    (state: any) => ({ isLogin : state.user.isLogin })
)(IndexContainer)