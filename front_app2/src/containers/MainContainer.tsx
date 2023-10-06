import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import classNames from 'classnames'

type MainProps = {
    isLogin : boolean
}

const MainContainer = ({ isLogin } : MainProps) : JSX.Element => {
    if (!isLogin) {
        return <Navigate to="/login" replace={true} />
    }
    return (
        <div className={classNames('content_box', {layout_width: !isLogin})}>
            <div>메인페이지</div>
        </div>
    );
};

export default connect(
    (state: any) => ({
        isLogin: state.user.isLogin
    }),
    {}
)(MainContainer)