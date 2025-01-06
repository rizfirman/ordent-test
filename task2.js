const getRemainder = (a, b) => {
  // If either a or b is zero, return "NaN"
  if (a === 0 || b === 0) {
    return 'NaN';
  }

  const larger = Math.max(a, b);
  const smaller = Math.min(a, b);

  // Return the remainder of dividing larger by smaller
  return larger % smaller;
}

// Example usage:
console.log(getRemainder(10, 3)); // 1 (10 % 3)
console.log(getRemainder(3, 10)); // 1 (10 % 3)
console.log(getRemainder(5, 0)); // "NaN"
