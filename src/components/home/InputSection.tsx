import { useAppDispatch } from "../../func/hooks/Dispatch";
import { changeGameName } from "../../RTK/Slices/GameNameSlice";
const InputSection = () => {
  const dispatch = useAppDispatch();
  const handelSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const gameName = data.get("GameName") as string;
    if (gameName.length > 0) {
      dispatch(changeGameName(gameName));
      event.currentTarget.reset();
    }
  };

  return (
    <form
      onSubmit={(e) => {
        handelSubmit(e);
      }}
      className="w-full shadow-sm sm:w-2/3 "
    >
      <input
        name="GameName"
        placeholder="Search..."
        className=" focus:scale-105 duration-300 focus:shadow-sm h-[40px] w-2/3 rounded-l-md outline-none px-4 py-2 bg-gray-100"
        type="text"
      />
      <input
        type="submit"
        value={"Search"}
        className="search-btn duration-300 h-[40px] cursor-pointer w-1/3 rounded-r-md text-white"
      />
    </form>
  );
};

export { InputSection };
