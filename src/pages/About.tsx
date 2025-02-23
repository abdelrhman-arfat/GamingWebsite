import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="w-full flex flex-col gap-6 ">
      <h1 className="text-2xl sm:text-3xl text-neutral-900">
        This website was developed by{" "}
        <Link to={"https://github.com/abdelrhman-arfat"}>
          Abdel Rhman Yasser{" "}
        </Link>
      </h1>

      <p className="text-xl sm:text-2xl text-sky-600">Tools:</p>
      <p>
        React - Redux ' toolkit persist RTK Query ' - tailwind - vite -
        typescript
      </p>
      <Link
        className="text-1xl sm:text-2xl w-fit hover:bg-sky-800 duration-200 rounded-md bg-sky-600 px-3 py-1 text-white "
        to={"https://github.com/abdelrhman-arfat/GamingWebsite"}
      >
        Git hub
      </Link>
    </div>
  );
};

export { AboutPage };
