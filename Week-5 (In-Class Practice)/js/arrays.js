console.log("Hello World");

const zodiacSigns = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

console.log("zodiacSigns:", zodiacSigns);

console.table(zodiacSigns);

console.log("2nd Zodiac Sign:", zodiacSigns[1]);

console.log("# of Zodiac Signs:", zodiacSigns.length);

const zodiacSignsUlRef = document.getElementById("zodiac-signs");

for (let i = 0; i < zodiacSigns.length; i++) {
 console.log("For Loop:", zodiacSigns[i]);
}

let whileI = 0; 
while (whileI < zodiacSigns.length) {
    console.log("While Loop:", zodiacSigns[whileI]);
    whileI++;
}

let whileDoI = 0;   
do {
    whileDoI++;
} while (whileDoI < zodiacSigns.length);