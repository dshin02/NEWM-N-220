// Using const (Preferred for constant values)
// Using let (Preferred for variable changes)

const price = 40.99;  // Item price, declared as 'const' since the price is fixed and doesn't change during execution.

const salesTaxRate = 0.07;  // Sales tax rate, also constant as it doesn't change.

const discountRate = 0.10;  // Discount rate, remains constant.

let totalAfterTax;  // Declared as 'let' because we will assign and change its value.

let discountedTotalAfterTax;  // Declared as 'let' for similar reasons as totalAfterTax.

let isEligibleForDiscount = price > 50;  // Boolean variable to check if the item is eligible for a discount. Declared with 'let' since it could change in a future context.

totalAfterTax = price * (1 + salesTaxRate);  

discountedTotalAfterTax = price * (1 + salesTaxRate) * (1 - discountRate);

discountedTotalAfterTax = isEligibleForDiscount * discountedTotalAfterTax + !isEligibleForDiscount * totalAfterTax;

console.log("Total after tax: $" + totalAfterTax);  

console.log("Discount eligibility: " + isEligibleForDiscount);  

console.log("Discounted total after tax: $" + discountedTotalAfterTax);