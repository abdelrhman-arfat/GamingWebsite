export const GameList = () => {
  return (
    <div className="w-full items-center py-5 sm:py-10 sm:grid justify-center flex sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index + "-game-card"}
          className="min-w-full h-[300px] bg-gray-200 shadow-md "
        ></div>
      ))}
    </div>
  );
};
