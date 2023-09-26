import {connect} from 'react-redux';
import { Navigate } from 'react-router-dom';
import JoinForm from '../components/member/JoinForm';

const JoinContainer = ({ isLogin }) => {
    if (isLogin) {
        return <Navigate to="/" replace={true} />;
    }

    return <JoinForm />;
};


export default connect(
    (state) => ({
        isLogin: state.user.isLogin
    }),
    {},
)(JoinContainer)