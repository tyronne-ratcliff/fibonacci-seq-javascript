function fibonacciSequence(length) {
  if (length <= 0) {
    return [];
  }

  const sequence = [0, 1];

  for (let i = 2; i < length; i++) {
    const nextNumber = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextNumber);
  }

  return sequence;
}

console.log(fibonacciSequence(5))
