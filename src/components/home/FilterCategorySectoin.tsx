import { useState } from "react";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { FaCompressArrowsAlt } from "react-icons/fa";
import { useAppDispatch } from "../../func/Dispatch";
import { changePlatFormName } from "../../RTK/Slices/PlatformSlice";
const FilterCategorySectoin = () => {
  const dispatch = useAppDispatch();
  const links = ["pc", "browser"];
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="relative shadow-md max-w-[200px]">
      <div className="flex items-center gap-3 bg-gray-50 px-2 py-2">
        <h3 className="text-xl">Filter platform</h3>

        <button
          onClick={() => {
            setisOpen((p) => !p);
          }}
        >
          {isOpen ? (
            <FaCompressArrowsAlt className="text-xl" />
          ) : (
            <FaExpandArrowsAlt className="text-xl" />
          )}
        </button>
      </div>
      <div
        className={`${isOpen ? "min-h-28 " : " overflow-hidden h-0"} shadow-xl z-40 rounded-b-md max-w-[175px] flex items-center justify-center bg-gray-50 duration-300 top-12 absolute right-0 `}
      >
        <ul className="w-[200px] py-4 px-2">
          {links.map((platform, index) => (
            <li
              onClick={() => {
                dispatch(changePlatFormName(platform));
                setisOpen(false);
              }}
              className=" hover:bg-neutral-300 duration-300 py-2 px-4 rounded-md my-1"
              key={platform + "-" + index}
            >
              {platform}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { FilterCategorySectoin };
