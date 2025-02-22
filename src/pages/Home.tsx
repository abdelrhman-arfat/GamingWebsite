import { FilterCategorySectoin } from "../components/home/FilterCategorySectoin";
import { GameList } from "../components/home/GameList";
import { InputSection } from "../components/home/InputSection";

function HomePage() {
  return (
    <div className="w-full flex flex-col gap-6 h-20">
      <div className="w-full">
        <h1 className="text-2xl sm:text-3xl">Hello In Game Hub !</h1>
      </div>
      <div className="w-full gap-4 sm:items-center flex flex-col sm:flex-row ">
        <InputSection />
        <FilterCategorySectoin />
      </div>
      <div>
        All Games
        <div className="w-full overflow-x-scroll">
          <GameList />
        </div>
      </div>
    </div>
  );
}

export { HomePage };
/*

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
      params: { platform: "pc" },
      headers: {
        "x-rapidapi-key": "194bc6b69dmshea152ded1f782cap167ce7jsn19a51789b881",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    (async () => {
      const response = await axios.request(options);

      console.log(response.data);
    })();
  }, []);

*/
