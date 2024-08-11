import { usePuzzleContext } from "../../context/PuzzleContext";
import { Slice } from "../../types";

const PuzzleSlice = ({ slice: { value, cIndex } }: { slice: Slice }) => {
  if (!value) {
    return;
  }
  const { unit, moveSlice } = usePuzzleContext()!;
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
      <span className="text-7xl md:text-8xl font-bold text-gray-300">
        {value}
      </span>
    </div>
  );
};

export default PuzzleSlice;
