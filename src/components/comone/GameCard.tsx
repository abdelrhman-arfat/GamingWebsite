import { Link } from "react-router-dom";
import { Game } from "../../RTK/types/GameType";

const GameCard = ({ item }: { item: Game }) => {
  return (
    <div className="w-full relative min-h-[250px] max-w-sm border border-gray-200 rounded-lg shadow-sm bg-gray-100">
      <img
        loading="lazy"
        className="w-full h-[120px] sm:h-[200px] rounded-t-lg"
        src={item.thumbnail}
        alt="product image"
      />
      <div className="px-5 py-5">
        <h5 className="font-semibold text-[12px] line-clamp-1 sm:text-[16px] tracking-tight text-gray-900">
          {item.title}
        </h5>
        <div className="w-full mt-2 flex flex-col gap-3">
          <div className="flex w-full items-center justify-between gap-3">
            <span className=" text-sm line-clamp-1">{item.platform}</span>
            <span className="text-sm line-clamp-1">Dev:{item.developer}</span>
          </div>
          <div className=" flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
            <span className=" text-sm line-clamp-1">{item.genre}</span>
            <span className="text-[10px] sm:text-sm line-clamp-1">
              {item.release_date}
            </span>
          </div>
          <Link
            to={item.game_url}
            target="_blank"
            className="absoulte bottom-1  text-white game-link-btn focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Vist Game
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
