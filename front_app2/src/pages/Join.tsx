import { Helmet } from 'react-helmet-async';
import JoinContainer from '../containers/JoinContainer';

const Join = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>회원가입 : NOVASEMI</title>
      </Helmet>
      <JoinContainer />
    </>
  );
};

export default Join;