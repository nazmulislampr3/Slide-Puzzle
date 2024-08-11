import PuzzleBox from "./components/PuzzleBox";
import Solved from "./components/Solved";
import { usePuzzleContext } from "./context/PuzzleContext";

const App = () => {
  const { setUnit, reset, solved } = usePuzzleContext();
  const levels = [
    {
      name: "Easy",
      unit: 3,
    },
    {
      name: "Intermediate",
      unit: 4,
    },
    {
      name: "Difficult",
      unit: 5,
    },
  ];

  return (
    <div className="bg-sky-700 min-h-screen p-2 md:p-4 flex flex-col items-center justify-center gap-7">
      <PuzzleBox />
      <div className="flex items-center justify-center flex-wrap gap-6">
        <select
          className="bg-slate-100 px-2 py-2 cursor-pointer font-medium"
          onChange={(e) => setUnit(parseInt(e.target.value))}
        >
          {levels.map(({ name, unit }, index) => (
            <option key={index} value={unit} className="font-medium">
              {name}
            </option>
          ))}
        </select>
        <button
          className="bg-gray-200 text-gray-900 font-medium px-4 py-1 text-lg"
          onClick={reset}
        >
          Reset
        </button>
      </div>
      {solved ? <Solved /> : null}
    </div>
  );
};

export default App;
