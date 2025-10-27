const sum_to_n_a = (n: number): number => {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum = sum + i + 1;
  }

  return sum;
}

const sum_to_n_b = (n: number): number => {
  let i = 1;
  let j = n;

  let sum = 0;

  for (; i <= j; i++, j--) {
    if (i === j) {
      sum = sum + i;
    } else {
      sum = sum + i + j;
    }
  }
  return sum;
}

const sum_to_n_c = (n: number): number => {
  if (n % 2 === 0) { // n is even
    return (n / 2) * (n + 1);
  }
  else {
    // n = 5, 1 + 5, 2 + 4, 3
    let middle = Math.floor(n / 2);
    return middle * (n + 1) + middle + 1;
  }
}

console.log("Function A, Complexity: O(n), result with n = 1000000: ", sum_to_n_a(1000000));
console.log("Function B, Complexity: O(n/2), result with n = 1000000: ", sum_to_n_b(1000000));
console.log("Function C, Complexity: O(1), result with n = 1000000: ", sum_to_n_c(1000000));
