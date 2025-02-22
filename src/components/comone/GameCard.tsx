import { Link } from "react-router-dom";
import { Game } from "../../RTK/types/GameType";

const GameCard = ({ item }: { item: Game }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm bg-gray-100">
      <img
        width={300}
        height={300}
        loading="lazy"
        className="p-8 rounded-t-lg"
        src={item.thumbnail}
        alt="product image"
      />
      <div className="px-5 pb-5">
        <h5 className="font-semibold tracking-tight text-gray-900">
          {item.title}
        </h5>
        <div className="w-full mt-2 flex flex-col gap-3">
          <div className="flex w-full items-center justify-between gap-3">
            <span className="text-sm line-clamp-1">Dev:{item.developer}</span>
            <span className=" text-sm line-clamp-1">{item.platform}</span>
          </div>
          <Link
            to={item.game_url}
            target="_blank"
            className="text-white game-link-btn focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Vist Game
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
