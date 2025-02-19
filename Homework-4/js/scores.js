const scores = [95, 72, 88, 45, 60, 79, 82, 91, 50, 38];
const scoresList = document.querySelector("ul");
const avgParagraph = document.getElementById("average-score");

let scoreItems = "";
for (let score of scores) {
    scoreItems += "<li>" + score + "</li>";
}
scoresList.innerHTML = scoreItems;

const averageScore = scores.reduce((total, score) => total + score, 0) / scores.length;
avgParagraph.textContent = "Average Score: " + averageScore.toFixed(2);
