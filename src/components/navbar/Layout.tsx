import { Outlet } from "react-router-dom";
import MyProvider from "../../RTK/Provider/MyProvider";
import { Navbar } from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <MyProvider>
      <div className="flex relative flex-col min-h-[120vh]">
        <header className="w-full shadow-sm">
          <Navbar />
        </header>

        <main className="flex-grow w-full mt-2 h-full">
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
