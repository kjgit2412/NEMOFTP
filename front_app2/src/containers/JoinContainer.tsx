import {connect} from 'react-redux';
import { Navigate } from 'react-router-dom';
import JoinForm from '../components/member/JoinForm';

const JoinContainer = ({ isLogin }) : JSX.Element => {
    if (isLogin) {
        return <Navigate to="/" replace={true} />;
    }

    return <JoinForm />;
};


export default connect(
    (state: any) => ({
        isLogin: state.user.isLogin
    }),
    {},
)(JoinContainer)