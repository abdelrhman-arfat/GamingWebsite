import { SetStateAction, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SideBarLinks } from "./SideBarLinks";
import { myLinks } from "../../constants/myLinks";
const Navbar = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState<SetStateAction<boolean>>(false);

  return (
    <nav className="bg-white relative w-[97%] mx-auto border-gray-200 ">
      <SideBarLinks
        pathname={pathname}
        setIsOpen={setIsOpen}
        myLinks={myLinks}
        isOpen={isOpen as boolean}
      />
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={"/"}>
          <span className="self-center uppercase text-2xl font-semibold whitespace-nowrap text-neutral-950">
            Game Hub
          </span>
        </Link>
        <button
          onClick={() => setIsOpen((p: boolean) => !p)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full  md:block md:w-auto" id="navbar-default">
          <ul className="flex gap-4">
            {myLinks.map((link, index) => (
              <li key={link.name + "-" + index}>
                <Link
                  className={`${pathname.replace("/", "") === link.path && "bg-purple-600 text-white"} ${pathname === "/" && link.name === "Home" && "bg-purple-600 text-white"}  duration-200 text-[15px] py-2 px-3 text-gray-900 rounded-md `}
                  to={link.path}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
