import { Outlet } from "react-router-dom";
import MyProvider from "../../RTK/Provider/MyProvider";
import { Navbar } from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <MyProvider>
      <div className="min-h-screen">
        <header className="w-full shadow-sm ">
          <Navbar />
        </header>
        <main className="w-full mt-5 h-full">
          <div className="w-[93%] mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
      <Footer />
    </MyProvider>
  );
};

export { Layout };
