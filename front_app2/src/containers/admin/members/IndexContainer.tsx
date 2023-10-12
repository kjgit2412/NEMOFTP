import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import MemberList from "../../../components/admin/members/MemberList"
import { OuterBox  } from "../../../components/common/LayoutBox"

const IndexContainer = ({isLogin}) : JSX.Element => {
    if (!isLogin) {
        return <Navigate to="/login" />
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