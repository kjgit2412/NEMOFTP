import { Helmet } from 'react-helmet-async';
import Title from '../components/common/Title';

const Join = () => {
  return (
    <>
      <Helmet>
        <title>회원가입 : NOVASEMI</title>
      </Helmet>
      <div className="layout_width content_box">
        <Title>회원가입</Title>
      </div>
    </>
  );
};

export default Join;
