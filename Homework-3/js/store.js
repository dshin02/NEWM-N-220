const itemPrice = 40.99; // Constant as item price does not change

const salesTax = 0.07;

const discountRate = 0.10;

const totalAfterTax = itemPrice * (1 + salesTax);

const qualifiesForDiscount = itemPrice > 50;

const discountedTotalAfterTax = itemPrice * (1 + salesTax) * (qualifiesForDiscount * (1 - discountRate) + !qualifiesForDiscount);

console.log("Total After Tax: " + totalAfterTax);

console.log("Qualifies for Discount: " + qualifiesForDiscount);

console.log("Discounted Total After Tax: " + discountedTotalAfterTax);