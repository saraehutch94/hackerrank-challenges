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

console.log(miniMaxSum([1, 3, 5, 7, 9]));