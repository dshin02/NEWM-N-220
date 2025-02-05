// Using const (Preferred for constant values)
// Using let (Preferred for variable changes)

const password = "(d0nteatTheScript)"; // Constant because password does not change.

const startsWithSpace = password.startsWith(" "); // Constant because password does not change.

const isLongEnough = password.slice(7) !== ""; // Constant because password does not change.

const containsEat = password.includes("eat"); // Constant because password does not change.

console.log("Starts with space: " + startsWithSpace);

console.log("Contains at least 8 characters: " + isLongEnough);

console.log("Contains 'eat': " + containsEat);
