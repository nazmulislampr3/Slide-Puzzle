import { usePuzzleContext } from "../../context/PuzzleContext";
import { Slice } from "../../types";

const PuzzleSlice = ({ slice: { value, cIndex } }: { slice: Slice }) => {
  if (!value) {
    return;
  }
  const { unit, moveSlice } = usePuzzleContext()!;
  console.log(unit);
  const size = 100 / unit;
  const row = Math.ceil((cIndex + 1) / unit);
  const col = Math.ceil((cIndex + 1) % unit) || unit;

  return (
    <div
      className="bg-pink-700 border-gray-300 border-2 aspect-square absolute flex items-center justify-center transition-all duration-300 cursor-pointer"
      style={{
        width: `${size}%`,
        top: `${(row - 1) * size}%`,
        left: `${(col - 1) * size}%`,
      }}
      onClick={() => moveSlice(cIndex)}
    >
      <span
        className={`font-bold text-gray-300 ${
          unit === 3
            ? "text-5xl md:text-7xl"
            : unit === 4
            ? "text-4xl md:text-6xl"
            : "text-3xl md:text-5xl"
        }`}
      >
        {value}
      </span>
    </div>
  );
};

export default PuzzleSlice;
