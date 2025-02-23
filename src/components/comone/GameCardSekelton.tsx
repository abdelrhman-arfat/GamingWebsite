const GameCardSekelton = () => {
  return (
    <div className="w-full relative min-h-[250px] max-w-sm border border-gray-200 rounded-lg shadow-sm bg-gray-100 animate-pulse">
      <div className="w-full h-[120px] sm:h-[200px] bg-gray-300 rounded-t-lg"></div>

      <div className="px-5 py-5">
        <div className="w-3/4 h-4 bg-gray-300 rounded-md"></div>

        <div className="w-full mt-2 flex flex-col gap-3">
          <div className="flex w-full items-center justify-between gap-3">
            <div className="w-1/3 h-3 bg-gray-300 rounded-md"></div>
            <div className="w-1/3 h-3 bg-gray-300 rounded-md"></div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
            <div className="w-1/3 h-3 bg-gray-300 rounded-md"></div>
            <div className="w-1/4 h-3 bg-gray-300 rounded-md"></div>
          </div>

          <div className="w-1/2 h-8 bg-gray-300 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default GameCardSekelton;
