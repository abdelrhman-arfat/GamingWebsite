import { useAppDispatch } from "../../func/hooks/Dispatch";
import { changeGameName } from "../../RTK/Slices/GameNameSlice";
const InputSection = () => {
  const dispatch = useAppDispatch();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="w-full shadow-sm sm:w-2/3 "
    >
      <input
        onChange={(e) => {
          const gameName = e.target.value;
          dispatch(changeGameName(gameName));
        }}
        name="GameName"
        placeholder="Search..."
        className=" focus:scale-105 duration-300 focus:shadow-sm h-[40px] w-full rounded-l-md outline-none px-4 py-2 bg-gray-100"
        type="text"
      />
    </form>
  );
};

export { InputSection };
