import { Outlet } from "react-router-dom";
import MyProvider from "../../RTK/Provider/MyProvider";
import { Navbar } from "./Navbar";

const Layout = () => {
  return (
    <MyProvider>
      <div className="min-h-screen">
        <header className="w-full">
          <Navbar />
        </header>
        <main className="w-full mt-2 h-full">
          <div className="w-[93%] mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </MyProvider>
  );
};

export { Layout };
