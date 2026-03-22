// student-average.js
// Student score analysis

let students = [
    { name: 'Alice', age: 22, scores: [78, 85, 92] },
    { name: 'Bob', age: 20, scores: [88, 90, 76] },
    { name: 'Charlie', age: 21, scores: [95, 80, 85] }
];

function calculateAverage(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}

function findTopStudent(students) {
    let topStudent = "";
    let highestAvg = 0;

    for (let i = 0; i < students.length; i++) {
        let avg = calculateAverage(students[i].scores);

        console.log(`${students[i].name}'s Average: ${avg.toFixed(2)}`);

        if (avg > highestAvg) {
            highestAvg = avg;
            topStudent = students[i].name;
        }
    }

    console.log(`Top Student: ${topStudent} with an average score of ${highestAvg.toFixed(2)}`);
}

// Run function
findTopStudent(students);