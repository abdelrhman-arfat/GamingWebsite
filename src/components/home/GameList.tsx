import { useMemo } from "react";
import { GatPlatFormName, GetGameName } from "../../func/hooks/Selector";
import {
  useGetAllGamesQuery,
  useGetGamesByPlatformQuery,
} from "../../RTK/Slices/GamesSlice";
import { Game } from "../../RTK/types/GameType";
import GameCard from "../comone/GameCard";
import GameCardSekelton from "../comone/GameCardSekelton";

export const GameList = () => {
  const platform = GatPlatFormName();
  const gameName = GetGameName();
  const { data, isLoading, error } = useGetAllGamesQuery();
  const {
    data: Sdata,
    isLoading: SisLoading,
    error: Serror,
  } = useGetGamesByPlatformQuery(platform, { skip: !platform });

  const selectedData =
    platform.length > 0
      ? { data: Sdata, isLoading: SisLoading, error: Serror }
      : { data, isLoading, error };

  const filteredGames = useMemo(() => {
    if (!selectedData.data) return [];
    if (!gameName) return selectedData.data;
    return selectedData.data.filter((game: Game) =>
      game.title.toLowerCase().startsWith(gameName.toLowerCase())
    );
  }, [gameName, selectedData.data]);

  if (selectedData.error)
    return <p className="text-center text-red-500">Error fetching games</p>;

  return (
    <div className="relative w-full max-h-[600px] sm:overflow-y-auto items-center py-5 sm:py-10 sm:grid justify-center flex sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {selectedData.isLoading &&
        !selectedData.data?.length &&
        Array.from({ length: 6 }).map((_, i) => <GameCardSekelton key={i} />)}
      {filteredGames.length > 0 ? (
        filteredGames.map((game) => <GameCard key={game.id} item={game} />)
      ) : (
        <p className="text-center text-2xl">No games found!</p>
      )}
    </div>
  );
};
