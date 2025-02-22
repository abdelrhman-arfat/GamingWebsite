import { useGetAllGamesQuery } from "../../RTK/Slices/GamesSlice";
import GameCard from "../comone/GameCard";

export const GameList = () => {
  const { data, isLoading, error } = useGetAllGamesQuery();
  console.log(data);
  if (isLoading) return <p className="text-center">Loading games...</p>;
  if (error)
    return <p className="text-center text-red-500">Error fetching games</p>;
  return (
    <div className="relative w-full max-h-[600px] sm:overflow-y-auto items-center py-5 sm:py-10 sm:grid justify-center flex sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {data && data.length > 0 ? (
        data.map((game) => <GameCard key={game.id} item={game} />)
      ) : (
        <p>No games found!</p>
      )}
    </div>
  );
};
