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
    const customDelimiter = numbers.substring(2, delimiterEndIndex);
    delimiters.push(customDelimiter);
    numberString = numbers.substring(delimiterEndIndex + 1);
  }

  const regex = new RegExp(`[${delimiters.join("")}]`);
  return numberString
    .split(regex)
    .reduce((acc, num) => acc + parseInt(num, 10), 0);
};

export { add_strings };
