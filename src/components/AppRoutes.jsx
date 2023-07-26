import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Principal from "./Principal";
import Geografia from "./Geografia";
import Ciencias from "./Ciencias";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/geografia" element={<Geografia />} />
        <Route path="/ciencias" element={<Ciencias />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
