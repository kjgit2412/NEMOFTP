import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import CommonLayout from './layouts/CommonLayout';
import NotFound from './pages/errors/NotFound';
import Main from './pages/Main';
import Login from './pages/Login';

const App = () => {
  return (
    <>
      <Helmet>
        <title>Novasemi</title>
      </Helmet>
      <Routes>
        <Route element={<CommonLayout />}>
          <Route index element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
