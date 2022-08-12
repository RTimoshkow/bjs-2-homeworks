"use strict"

function solveEquation(a, b, c) {
  let arr = [];

  let D;

  D = b*b-4*a*c;

  if (D < 0) {
    arr = [];
  }

  if (D == 0) {
    arr.push(-b/(2*a));
  }

  if (D > 0) {
    arr.push((-b + Math.sqrt(D) )/(2*a));
    arr.push((-b - Math.sqrt(D) )/(2*a));
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  
  let currentDate = new Date();
  let currentMounth = currentDate.getMonth() + 1;
  let currentYear = currentDate.getFullYear();
  let nextYear = date.getFullYear();

  let P = percent / 100 / 12; //месечный процент
  let n; //колличество месяцев
  let loanBody = amount - contribution; // тело кредита
  
  let errorMessagePercent = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  let errorMessageContribution = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  let errorMessageAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;

  if (percent === undefined) {
    return alert(errorMessagePercent);
  }
  if (contribution === undefined) {
    return alert (errorMessageContribution);
  }
  if (amount === undefined) {
    return alert (errorMessageAmount);
  }

  if (currentYear < nextYear) {
    n = (12 - currentMounth) + (date.getMonth() + 1) + ((nextYear - currentYear - 1) * 12);
  }
  let monthlyPayment = loanBody * (P + (P / (((1 + P)**n) - 1)));

  totalAmount = (monthlyPayment * n).toFixed(2);

  return (+ `${totalAmount}`);
}
