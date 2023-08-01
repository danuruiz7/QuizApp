import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Principal from './Principal';
import Geografia from './Geografia';
import Ciencias from './Ciencias';
import Historia from './Historia';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/geografia" element={<Geografia />} />
        <Route path="/ciencias" element={<Ciencias />} />
        <Route path="/historia" element={<Historia />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
