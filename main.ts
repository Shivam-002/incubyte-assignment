const add_strings = (numbers: string): number => {
  // If the string is empty, return 0
  if (numbers === "") {
    return 0;
  }

  const delimiters = [",", "\n"];
  const regex = new RegExp(`[${delimiters.join("")}]`);
  return numbers.split(regex).reduce((acc, num) => acc + parseInt(num, 10), 0);
};

export { add_strings };
