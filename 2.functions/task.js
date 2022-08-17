// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  max = arr[0];
  min = arr[0];
  sum = 0;

  for (let arg of arr) {
    if (min > arg) {
      min = arg;
    }
    if (max < arg) {
      max = arg;
    }
    sum += arg;
  }
  avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let arg of arr) {
    sum += arg;
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;

  for (let arr of arrOfArr) {
    let sum = func(arr);
    if (max < sum) {
      max = sum;
    }
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let arg of arr) {
    if (min > arg) {
      min = arg
    }
    if (max < arg) {
      max = arg;
    }
  }
  return Math.abs(min - max);
}