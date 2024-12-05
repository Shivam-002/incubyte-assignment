const add_strings = (numbers: string): number => {
  //Empty string
  if (numbers.length === 0) return 0;

  const num_arr = numbers.split(",");

  //Single number
  if (num_arr.length === 1) return parseInt(num_arr[0]);

  //Two numbers
  return parseInt(num_arr[0]) + parseInt(num_arr[1]);
};

export { add_strings };
