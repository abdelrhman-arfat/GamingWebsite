import { SetStateAction, useState } from "react";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { FaCompressArrowsAlt } from "react-icons/fa";
import { changePlatFormName } from "../../RTK/Slices/PlatformSlice";
import { useAppDispatch } from "../../func/hooks/Dispatch";
import { GatPlatFormName } from "../../func/hooks/Selector";

const FilterCategorySectoin = () => {
  const dispatch = useAppDispatch();
  const platform = GatPlatFormName();
  const links = ["pc", "browser"];
  const [isOpen, setisOpen] = useState<SetStateAction<boolean>>(false);
  return (
    <div className="relative shadow-md max-w-[200px]">
      <div
        style={{ opacity: isOpen ? 1 : 0.6 }}
        className="flex items-center gap-3 duration-300 px-2 py-2"
      >
        <h3 className="text-xl">Filter platform</h3>

        <button
          onClick={() => {
            setisOpen((p: boolean) => !p);
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
        className={`${isOpen ? "min-h-28 " : " overflow-hidden h-0"} duration-300 shadow-xl z-40 rounded-b-md max-w-[175px] flex items-center justify-center bg-gray-50 top-12 absolute right-0 `}
      >
        <ul className="w-[200px] py-4 px-2">
          {links.map((platformName, index) => (
            <li
              onClick={() => {
                dispatch(changePlatFormName(platformName));
                setisOpen(false);
              }}
              className={` hover:bg-neutral-300 duration-300 py-2 px-4 rounded-md my-1 ${platformName === platform && "bg-neutral-200"} `}
              key={platformName + "-" + index}
            >
              {platformName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { FilterCategorySectoin };
