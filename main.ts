const add_strings = (numbers: string): number => {
  // If the string is empty, return 0
  if (numbers === "") {
    return 0;
  }

  return numbers.split(",").reduce((acc, num) => acc + parseInt(num, 10), 0);
};

export { add_strings };
