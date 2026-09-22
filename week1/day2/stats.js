const findMax = (numbers) => {
  max = numbers[0];

  for (const num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
};

const findMin = (numbers) => {
  min = numbers[0];

  for (const num of numbers) {
    if (num < min) {
      min = num;
    }
  }
  return min;
};

const findAverage = (numbers) => {
  let totalSum = 0;

  for (const num of numbers) {
    totalSum += num;
  }
  return totalSum / numbers.lengt;
};

const num = [12, 5, 88, 3, 45, 88, -7];
console.log(findAverage(num));
