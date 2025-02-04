const password = "(d0nteatTheScript)"; // Constant because password does not change
const startsWithSpace = password.startsWith(" ");
const isLongEnough = password.length >= 8;
const containsEat = password.includes("eat");

console.log("Starts with space: " + startsWithSpace);
console.log("Contains at least 8 characters: " + isLongEnough);
console.log("Contains 'eat': " + containsEat);
