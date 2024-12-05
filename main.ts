const parseDelimiters = (
  numbers: string
): { delimiters: string[]; numberString: string } => {
  let delimiters = [",", "\n"];
  let numberString = numbers;

  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    const customDelimiterSection = numbers.substring(2, delimiterEndIndex);
    const customDelimiters = customDelimiterSection.match(/\[([^\]]+)\]/g);

    if (customDelimiters) {
      customDelimiters.forEach((delimiter) => {
        delimiters.push(delimiter.slice(1, -1));
      });
    } else {
      delimiters.push(customDelimiterSection);
    }

    numberString = numbers.substring(delimiterEndIndex + 1);
  }

  return { delimiters, numberString };
};

const splitNumbers = (numberString: string, delimiters: string[]): string[] => {
  const regex = new RegExp(
    `[${delimiters
      .map((d) => d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|")}]`
  );
  return numberString.split(regex).filter((num) => num !== "");
};

const filterNegativeNumbers = (numberArray: string[]): void => {
  const negativeNumbers = numberArray.filter((num) => parseInt(num, 10) < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(`Negatives not allowed: ${negativeNumbers.join(",")}`);
  }
};

const filterLargeNumbers = (
  numberArray: string[],
  maxNumber: number
): string[] => {
  return numberArray.filter((num) => parseInt(num, 10) <= maxNumber);
};

const add_strings = (numbers: string): number => {
  if (numbers === "") {
    return 0;
  }

  const { delimiters, numberString } = parseDelimiters(numbers);
  let numberArray = splitNumbers(numberString, delimiters);

  filterNegativeNumbers(numberArray);

  const MAX_NUMBER = 1000;
  numberArray = filterLargeNumbers(numberArray, MAX_NUMBER);

  return numberArray.reduce((acc, num) => acc + parseInt(num, 10), 0);
};

export { add_strings };
