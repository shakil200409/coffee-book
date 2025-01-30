import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/NAvbar";

const MainLayout = () => {
  return (
    <div>
      <div className="max-w-[1150px] mx-auto">
        {/* Navbar */}
        <Navbar></Navbar>
        {/* Dynamic Pages */}
        <div className="min-h-[calc(100vh-229px)]">
          <Outlet />
        </div>
      </div>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
