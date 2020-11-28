// At a lemonade stand, each lemonade costs $5.

// Customers are standing in a queue to buy from you, and order one at a time
// (in the order specified by bills).

// Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.
// You must provide the correct change to each customer, so that the net transaction is
// that the customer pays $5.

// Note that you don't have any change in hand at first.

// Return true if and only if you can provide every customer with correct change.

// Example 1:

// Input: [5,5,5,10,20]
// Output: true
// Explanation:
// From the first 3 customers, we collect three $5 bills in order.
// From the fourth customer, we collect a $10 bill and give back a $5.
// From the fifth customer, we give a $10 bill and a $5 bill.
// Since all customers got correct change, we output true.

const lemonadeChange = (bills) => {
  const ourMoney = {}; // keys are bills, values occurrences
  let status = true;
  bills.forEach((bill) => {
    if (bill === 5) {
      // they dont get any change, we get a 5
      if (5 in ourMoney) {
        ourMoney[5] += 1;
      } else {
        ourMoney[5] = 1;
      }
    } else if (bill === 10) {
      // collect the money
      if (10 in ourMoney) {
        ourMoney[10] += 1;
      } else {
        ourMoney[10] = 1;
      }
      // if we dont have a five, return false
      if (!(5 in ourMoney) || ourMoney[5] <= 0) status = false;
      // we do have the change, so carry out transaction
      // collect money
      // give the change
      ourMoney[5] -= 1;
    } else {
      // bill is a 20
      // accept new money
      console.log("twenty case");
      if (20 in ourMoney) {
        ourMoney[20] += 1;
      } else {
        ourMoney[20] = 1;
      }
      // if there isnt 15 dollars in change return false
      // three fives
      // one five and one ten
      if (!(ourMoney[5] >= 3 || (ourMoney[5] >= 1 && ourMoney[10] >= 1)))
        status = false;
      // give change
      console.log("ourMoney", ourMoney);
      if (ourMoney[5] >= 1 && ourMoney[10] >= 1) {
        // give one five, one ten
        ourMoney[5] -= 1;
        ourMoney[10] -= 1;
      } else {
        // give three fives
        ourMoney[5] -= 3;
      }
    }
  });
  return status; // successfully paid all the customers
};
