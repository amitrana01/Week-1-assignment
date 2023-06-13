/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/



function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};

  for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];
    const category = transaction.category;
    const price = transaction.price;

    if (category in categoryTotals) {
      categoryTotals[category] += price;
    } else {
      categoryTotals[category] = price;
    }
  }

  const result = [];

  for (const category in categoryTotals) {
    const total = categoryTotals[category];
    const categoryTotal = {};
    categoryTotal[category] = total;
    result.push(categoryTotal);
  }

  return result;
}

const transactions = [
  { itemName: 'Item 1', category: 'Category 1', price: 10.0, timestamp: '2023-06-13' },
  { itemName: 'Item 2', category: 'Category 2', price: 15.0, timestamp: '2023-06-13' },
  { itemName: 'Item 3', category: 'Category 1', price: 5.0, timestamp: '2023-06-13' },
  { itemName: 'Item 4', category: 'Category 2', price: 20.0, timestamp: '2023-06-13' },
  { itemName: 'Item 5', category: 'Category 3', price: 12.0, timestamp: '2023-06-13' },
  { itemName: 'Item 6', category: 'Category 1', price: 8.0, timestamp: '2023-06-13' }
];

const result = calculateTotalSpentByCategory(transactions);
console.log(result);


module.exports = calculateTotalSpentByCategory;
