function add(numbers) {
  // If the input is an empty string, return 0
  if (numbers === "") return 0;

  let delimiter = ","; 
  // Check if the string starts with a custom delimiter declaration
  if (numbers.startsWith("//")) {
      delimiter = numbers[2];
      numbers = numbers.slice(4);
  }
  numbers = numbers.replace(/\n/g, delimiter);

  // Split the string into an array of numbers and convert them to integers
  const numArray = numbers.split(delimiter).map(Number);

  // Check for negative numbers and collect them
  const negatives = numArray.filter(num => num < 0);
  // If there are any negative numbers, throw an error
  if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
  }

  // Return the sum of the numbers using reduce
  return numArray.reduce((sum, num) => sum + num, 0);
}

module.exports = { add }; 
