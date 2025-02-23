import { useGetAllGamesQuery } from "../../RTK/Slices/GamesSlice";
import GameCard from "../comone/GameCard";
import GameCardSekelton from "../comone/GameCardSekelton";

export const GameList = () => {
  const { data, isLoading, error } = useGetAllGamesQuery();
  console.log(data);

  if (error)
    return <p className="text-center text-red-500">Error fetching games</p>;
  return (
    <div className="relative w-full max-h-[600px] sm:overflow-y-auto items-center py-5 sm:py-10 sm:grid justify-center flex sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {isLoading &&
        Array.from({ length: 10 }).map((_, i) => <GameCardSekelton key={i} />)}
      {data && data.length > 0 ? (
        data.map((game) => <GameCard key={game.id} item={game} />)
      ) : (
        <p>No games found!</p>
      )}
    </div>
  );
};
