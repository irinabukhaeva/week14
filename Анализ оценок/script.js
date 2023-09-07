const grades = [];
grades[0] = Math.ceil(Math.random() * 100);
grades[1] = Math.ceil(Math.random() * 100);
grades[2] = Math.ceil(Math.random() * 100);
grades[3] = Math.ceil(Math.random() * 100);
grades[4] = Math.ceil(Math.random() * 100);
grades[5] = Math.ceil(Math.random() * 100);
grades[6] = Math.ceil(Math.random() * 100);
grades[7] = Math.ceil(Math.random() * 100);
grades[8] = Math.ceil(Math.random() * 100);
grades[9] = Math.ceil(Math.random() * 100);
grades[10] = Math.ceil(Math.random() * 100);
grades[11] = Math.ceil(Math.random() * 100);

console.log("Оценки студентов: " + grades);

const getAverage = (grades) =>
  grades.reduce((acc, grade) => acc + grade, 0) / grades.length;

console.log("Средний уровень оценок: " + getAverage(grades));

const maxGrade = grades.sort((a, b) => b - a)[0];
console.log("Максимальная оценка: " + maxGrade);

const minGrade = grades.sort((a, b) => a - b)[0];
console.log("Минимальная оценка: " + minGrade);

const filteredPositiveGrades = grades.filter((grade) => grade >= 60);
console.log(
  "Количество студентов, получивших положительные оценки: " +
    filteredPositiveGrades.length
);

const filteredNegativeGrades = grades.filter((grade) => grade < 60);
console.log(
  "Количество студентов, получивших отрицательные оценки: " +
    filteredNegativeGrades.length
);

const newGrades = grades.map(function (grade) {
  if (grade >= 80) return (grade = "A");
  else if (grade >= 60 && grade < 80) return (grade = "B");
  else if (grade >= 40 && grade < 60) return (grade = "C");
  else if (grade >= 20 && grade < 40) return (grade = "D");
  else return (grade = "E");
});
console.log("Оценки в буквенном выражении: " + newGrades);
