// diagonalDifference

function diagonalDifference(arr) {
    let difference = 0;
    
    for (let i = 0; i < arr.length; i++) {
      difference += arr[i][i];
      difference -= arr[i][arr.length - 1 - i];
    }
    return Math.abs(difference);
}

// plusMinus

function plusMinus(arr) {
    let numOfPos = 0;
    let numOfNeg = 0;
    let numOfZero = 0;
    let arrayLen = arr.length;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            numOfZero++;
        } else if (arr[i] > 0) {
            numOfPos++;
        } else {
            numOfNeg++;
        }
    }

    numOfPos = (numOfPos / arrayLen).toFixed(6);
    numOfNeg = (numOfNeg / arrayLen).toFixed(6);
    numOfZero = (numOfZero / arrayLen).toFixed(6);

    return `${numOfPos}\n${numOfNeg}\n${numOfZero}`;
}

// staircase

function staircase(n) {
    let stairs = [];
    
    for (let i = 1; i <= n; i++) {
        let stair = " ".repeat(n - i) + "#".repeat(i);
        stairs.push(stair);
    }

    let stairsCombined = stairs.join("\n");
    return stairsCombined;
}

// miniMaxSum

function miniMaxSum(arr) {
    let total = 0;
    
    const sortedArray = arr.sort(function(a, b) {
        return a - b;
    });

    for (let i = 0; i < sortedArray.length; i++) {
        total += sortedArray[i];
    }
    
    let min = total - sortedArray[sortedArray.length - 1];
    let max = total - sortedArray[0];

    return `${min} ${max}`;

}

// console.log(miniMaxSum([1, 3, 5, 7, 9]));

// birthdayCakeCandles

function birthdayCakeCandles(candles) {
    let count = 0;

    const largestVal = Math.max(...candles);

    candles.forEach(element => {
        element == largestVal ? count++ : null;
    });

    return count;

};

// console.log(birthdayCakeCandles([4, 7, 20, 4, 9, 20, 6, 8, 20, 5, 8, 1]));

// timeConversion

function timeConversion(s) {
    let splitString = s.split(":");
    let hour = parseInt(splitString[0]);
    const regex = /[a-zA-Z]+/;

    if (splitString[2].includes("PM") && hour != 12) hour += 12;
    if (splitString[2].includes("AM") && hour == 12) hour -= 12;
    
    hour = hour.toString();
    if (hour.length == 1) hour = "0" + hour;

    const newSeconds = splitString[2].replace(regex, "");
    splitString.splice(0, 1, hour);
    splitString.splice(2, 1, newSeconds);
    let newString = splitString.join(":");
    return newString;

};

// console.log(timeConversion("12:01:00AM"));

// gradingStudents

function gradingStudents(grades) {

    const gradeArray = [];

    grades.forEach(grade => {

        const multOfFive = Math.ceil(grade / 5) * 5;
        const difference = multOfFive - grade;

        if (difference < 3 && grade >= 38) {
            gradeArray.push(multOfFive);
        } else {
            gradeArray.push(grade);
        }
    });

    return gradeArray;
};

// console.log(gradingStudents([78, 67, 38, 33]));

// countApplesAndOranges

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;

    apples.forEach(apple => {
        let sum = a + apple;
        if (sum >= s && sum <= t) appleCount++;
    });

    oranges.forEach(orange => {
        let sum = b + orange;
        if (sum >= s && sum <= t) orangeCount++;
    });

    return `${appleCount}\n${orangeCount}`;

};

// console.log(countApplesAndOranges(7, 10, 5, 15, [-2, 2, 1], [5, -6]));

// kangaroo

    // explanation:
    // to find the amount of jumps for each kangaroo, we need to use this equation:
    // p = jm + s
    // p = position of kangaroo, j = amount of jumps, m = meters per jump, s = starting point
    // we want to see where these two kangaroos meet (if they do meet) so we want to take both equations
    // (one for each kangaroo) and make them equal to each other (we are comparing their positions) to determine what the amount of jumps are
    // jm + s = jm + s => jv1 + x1 = jv2 + x2
    // we need to move j to one side of the equation to solve for it:
    // x1 = jv2 + x2 - jv1
    // x1 - x2 = jv2 - jv1
    // x1 - x2 = j(v2 - v1)
    // (x1 - x2)/(v2 - v1) = j
    // if j is a negative number or a decimal, return "NO" (negative: v2 > v1 => kangaroo #2 is in lead the whole time and kangaroo #1 can't catch up; decimal: cross paths at decimal number points)
    // if j is a positive number, return "YES" (cross paths in same amount of jumps)

function kangaroo(x1, v1, x2, v2) {
    let jumps = (x1 - x2) / (v2 - v1);

    if (jumps < 0 || jumps % 1 != 0) return "NO";

    return "YES";
};

console.log(kangaroo(0, 2, 5, 3));