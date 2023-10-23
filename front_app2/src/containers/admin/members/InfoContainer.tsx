import { connect } from 'react-redux'
import LoginContainer from '../../LoginContainer'
import InfoForm from '../../../components/admin/members/InfoForm'
import { OuterBox } from '../../../components/common/LayoutBox'

const InfoContainer = ({isLogin}) => {
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