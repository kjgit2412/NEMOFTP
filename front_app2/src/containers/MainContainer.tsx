import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';


type MainProps = {
    isLogin : boolean
}

const MainContainer = ({ isLogin } : MainProps) : JSX.Element => {
    if (!isLogin) {
        return <Navigate to="/login" replace={true} />;
    }
    return (
        <div className="layout_width content_box">
            <div>메인페이지</div>
        </div>
    );
};

export default connect(
    (state: any) => ({
        isLogin: state.user.isLogin
    }),
    {}
)(MainContainer);