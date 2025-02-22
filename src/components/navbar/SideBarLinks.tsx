import { Link } from "react-router-dom";

const SideBarLinks = ({
  isOpen,
  myLinks,
  setIsOpen,
  pathname,
}: {
  pathname: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  myLinks: { name: string; path: string }[];
}) => {
  return (
    <div
      className={`${isOpen ? "h-14 " : " overflow-hidden h-0"} w-full flex items-center justify-center bg-gray-100 duration-300 absolute top-[73px] right-0 `}
    >
      <div className="flex gap-3 ">
        {myLinks.map((link, index) => (
          <Link
            onClick={() => {
              setIsOpen(false);
            }}
            className={`${pathname.replace("/", "") === link.path && "bg-purple-600 text-white"} ${pathname === "/" && link.name === "Home" && "bg-purple-600 text-white"}  duration-200 text-[15px] py-2 px-3 text-gray-900 rounded-md `}
            to={link.path}
            key={link.name + "-" + index}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export { SideBarLinks };
