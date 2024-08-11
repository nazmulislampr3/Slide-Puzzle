import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import getRandomNumber from "../utils/getRandomNumber";
import { Slice } from "../types";

type ContextType = {
  slices: Slice[];
  reset: () => void;
  solved: boolean;
  unit: number;
  moveSlice: (cIndex: number) => void;
  setUnit: any;
};

const PuzzleContext = createContext<ContextType>();

const PuzzleContextProvider = ({ children }: { children: ReactNode }) => {
  const [slices, setSlices] = useState<Slice[]>([]);
  const [unit, setUnit] = useState<3 | 4 | 5>(3);
  const totalSlices = unit * unit - 1;
  const nullIdx = slices.find((item) => item.value === null)?.cIndex!;

  const solved: boolean = !slices.length
    ? false
    : !(slices.findIndex((item) => item.cIndex !== item.index) >= 0);

  const initialize = () => {
    let tempSlices: (number | null)[] = new Array(unit * unit - 1)
      .fill(null)
      .map((v, index) => index + 1);
    tempSlices.push(null);

    let tempSlicesCopy = [...tempSlices];

    let length = tempSlicesCopy.length;

    const slicesUnconstrained: Slice[] = [];

    while (length >= 1) {
      const randomIdx = getRandomNumber(0, length - 1);
      const temp: number | null =
        length > 1 ? tempSlicesCopy[randomIdx] : tempSlicesCopy[0];
      tempSlicesCopy = tempSlicesCopy.filter((num) => num !== temp);
      slicesUnconstrained.push({
        value: temp,
        index: tempSlices.findIndex((item) => item === temp),
        cIndex: totalSlices - (length - 1),
      });
      length--;
    }

    setSlices(slicesUnconstrained);
  };

  const getCol = (cIndex: number) => Math.ceil((cIndex + 1) % unit) || unit;

  const getRow = (cIndex: number) => Math.ceil((cIndex + 1) / unit);

  const moveSlice = (cIndex: number) => {
    if (
      (getRow(cIndex) === getRow(nullIdx) &&
        Math.abs(cIndex - nullIdx) === 1) ||
      (getCol(cIndex) === getCol(nullIdx) &&
        Math.abs(cIndex - nullIdx) === unit)
    ) {
      setSlices((prev) =>
        prev.map((item) => {
          if (item.cIndex === cIndex) {
            return {
              ...item,
              cIndex: nullIdx,
            };
          }
          if (item.cIndex === nullIdx) {
            return {
              ...item,
              cIndex,
            };
          }

          return item;
        })
      );
    }
  };

  const reset = initialize;

  useEffect(initialize, [unit]);

  useEffect(() => {
    if (solved) {
      setTimeout(reset, 3000);
    }
  }, [solved]);

  console.log(slices);

  return (
    <PuzzleContext.Provider
      value={{ slices, reset, unit, moveSlice, setUnit, solved }}
    >
      {children}
    </PuzzleContext.Provider>
  );
};

export const usePuzzleContext = (): ContextType => {
  const context = useContext(PuzzleContext);
  return context;
};

export default PuzzleContextProvider;
