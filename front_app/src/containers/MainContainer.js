import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const MainContainer = ({ isLogin }) => {
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
    (state) => ({
        isLogin: state.user.isLogin
    }),
    {}
)(MainContainer);