import { connect } from 'react-redux'
import classNames from 'classnames'
import loadable from '@loadable/component'

type MainProps = {
    isLogin : boolean
}

const MainContainer = ({ isLogin } : MainProps) : JSX.Element => {
    if (!isLogin) {
        const LoginController = loadable(() => import('../containers/LoginContainer'))
        return <LoginController />
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