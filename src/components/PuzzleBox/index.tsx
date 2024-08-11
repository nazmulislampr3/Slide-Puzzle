import { usePuzzleContext } from "../../context/PuzzleContext";
import PuzzleSlice from "../PuzzleSlice";

const PuzzleBox = () => {
  const { slices } = usePuzzleContext()!;
  return (
    <div className="bg-gray-400 w-full max-w-4xl aspect-square relative">
      {slices.map((slice, index) => (
        <PuzzleSlice key={index} slice={slice} />
      ))}
    </div>
  );
};

export default PuzzleBox;
