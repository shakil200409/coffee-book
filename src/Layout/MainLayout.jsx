import Footer from "../Components/Footer";
import Navbar from "../Components/NAvbar";

const MainLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Dynamic Pages */}
      <div className="min-h-[calc(100vh-229px)]"></div>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
