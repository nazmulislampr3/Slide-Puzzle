const Solved = () => {
  return (
    <div
      className="solvedMessage fixed w-full h-full inset-0 flex items-center justify-center flex-col gap-5"
      style={{
        background: "rgba(0, 0, 0, 0.9)",
      }}
    >
      <span className="font-bold text-gray-200 text-5xl">Congrats!</span>
      <span className="font-medium text-red-400 text-2xl">Puzzle solved!</span>
    </div>
  );
};

export default Solved;
