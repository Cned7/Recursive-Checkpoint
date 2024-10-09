// 1. LEAP YEAR CHECKER

const isLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is a leap year.`;
  } else {
    return `${year} is not a leap year.`;
  }
};

const checkYear = 2024;
console.log(isLeapYear(checkYear));

// 2. ISSUE TICKET PRICE ACCORDING TO AGE CATEGORY

const categoryTicket = (ages) => {
  const pricingPolicy = new Map([
    [[0, 12], 10],
    [[13, 17], 15],
    [[18, Infinity], 20],
  ]);

  const ticketPrice = (age) => {
    for (const [[minAge, maxAge], price] of pricingPolicy) {
      if (age >= minAge && age <= maxAge) {
        return price;
      }
    }
  };

  const issueCateogryTicket = (remainingAges) => {
    if (remainingAges.length === 0) return [];

    const [firstAgeCategory, ...otherAgeCategories] = remainingAges;
    const price = ticketPrice(firstAgeCategory);

    return [price, ...issueCateogryTicket(otherAgeCategories)];
  };

  return issueCateogryTicket(ages);
};

const ages = [12, 17, 18];
const tickets = categoryTicket(ages);

console.log(`Ticket price for age ${ages[0]} is $${tickets[0]}`);
console.log(`Ticket price for age ${ages[1]} is $${tickets[1]}`);
console.log(`Ticket price for age ${ages[2]} is $${tickets[2]}`);

// 3 FINABOCCI

const fibonacci = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const n = 15;
console.log(`The ${n}th Fibonacci number is: ${fibonacci(n)}`);

// 4 POWER FUNCTION

const power = (base, exponent) => {
  if (exponent === 0) return 1;
  if (exponent < 0) return 1 / power(base, -exponent);
  return base * power(base, exponent - 1);
};

const base = 5;
const exponent = 3;
console.log(
  `${base} raised to the power of ${exponent} is: ${power(base, exponent)}`
);
