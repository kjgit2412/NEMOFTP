import {connect} from 'react-redux';
import JoinForm from '../components/member/JoinForm';

const JoinContainer = ({ isLogin }) => {
    return <JoinForm isLogin={isLogin} />;
};


export default connect(
    (state) => ({
        isLogin: state.user.isLogin
    }),
    {},
)(JoinContainer)