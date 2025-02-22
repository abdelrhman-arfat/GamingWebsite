import { Link } from "react-router-dom";

const UnFoundPages = () => {
  return (
    <div className="w-screen h-screen bg-gray-100 flex flex-col gap-8 items-center justify-center">
      <h1 className="text-2xl sm:text-6xl text-neutral-700">404 | Page Not Found</h1>
      <Link
        className=" text-xl sm:text-2xl px-4 py-2 rounded-md bg-sky-700 hover:bg-sky-900 duration-200 text-white"
        to={"/"}
        replace
      >
        Home Page
      </Link>
    </div>
  );
};

export { UnFoundPages };
