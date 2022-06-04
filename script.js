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
            numOfZero += 1;
        } else if (arr[i] > 0) {
            numOfPos += 1;
        } else {
            numOfNeg += 1;
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
        element == largestVal ? count += 1 : null;
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

console.log(timeConversion("12:01:00AM"));