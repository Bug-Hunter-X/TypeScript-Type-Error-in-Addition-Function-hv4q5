function add(a: number, b: number): number {
  return a + b;
}

const result1 = add(5, 10); // Correct: Both arguments are numbers
const result2 = add(5, parseInt('10', 10)); // Correct: String converted to number

function addImproved(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseInt(a, 10) : a;
  const numB = typeof b === 'string' ? parseInt(b, 10) : b;
  return numA + numB;
}

const result3 = addImproved(5, '10'); // Correct: Handles number and string arguments
const result4 = addImproved('5', '10'); // Correct: Handles two string arguments