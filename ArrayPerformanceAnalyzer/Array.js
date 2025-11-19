// Generate an array of 8 random scores between 30 and 100
let scores = Array(8)
  .fill(0)
  .map(() => Math.floor(Math.random() * 71) + 30);

let highest = Math.max(...scores);
let lowest = Math.min(...scores);

let average =
  scores.reduce((total, current) => total + current, 0) / scores.length;

// Number of students who passed (>= 50)
let passedCount = scores.filter(score => score >= 50).length;

let summary = `
===== Student Performance Analyzer =====
Scores: ${scores.join(", ")}

Highest Score: ${highest}
Lowest Score: ${lowest}
Average Score: ${average.toFixed(2)}
Students Passed (>=50): ${passedCount}
`;

console.log(summary);
