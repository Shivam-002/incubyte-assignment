const add_strings = (numbers: string): number => {
  // If the string is empty, return 0
  if (numbers === "") {
    return 0;
  }

  let delimiters = [",", "\n"];
  let numberString = numbers;

  // Check for  delimiter
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

  const regex = new RegExp(
    `[${delimiters
      .map((d) => d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|")}]`
  );
  let numberArray = numberString.split(regex);
  const negativeNumbers = numberArray.filter((num) => parseInt(num, 10) < 0);

  numberArray = numberArray.filter((num) => num !== "");
  if (negativeNumbers.length > 0) {
    throw new Error(`Negatives not allowed: ${negativeNumbers.join(",")}`);
  }

  const MAX_NUMBER = 1000;
  numberArray = numberArray.filter((num) => parseInt(num, 10) <= MAX_NUMBER);

  return numberArray.reduce((acc, num) => acc + parseInt(num, 10), 0);
};

export { add_strings };
