const departments = [
  ["HR", 72],
  ["Finance", 88],
  ["Tech", 95],
  ["Support", 63]
];

for (let i = 0; i < departments.length; i++) {
  let deptName = departments[i][0];
  let score = departments[i][1];
  let evaluation = "";

  // Nested if-else to determine performance
  if (score >= 90) {
    evaluation = "Excellent";
  } else if (score >= 75 && score <= 89) {
    evaluation = "Good";
  } else if (score >= 60 && score <= 74) {
    evaluation = "Average";
  } else {
    evaluation = "Needs Improvement";
  }

  console.log(`${deptName} Department: ${evaluation}`);
}