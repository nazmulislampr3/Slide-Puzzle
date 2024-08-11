import getRandomNumber from "./getRandomNumber";

const getRandomValue = (arr: any[]): any => {
  if (arr.length === 1) {
    return arr[0];
  }

  return arr[getRandomNumber(0, arr.length - 1)];
};

export default getRandomValue;
